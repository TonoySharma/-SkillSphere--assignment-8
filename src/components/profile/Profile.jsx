"use client";

import React from "react";
import { authClient } from "../../lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { UpdateModal } from "@/components/updateprofile/UpdateProfile";
import { Mail, Calendar } from "lucide-react";
import FadeUp from "@/components/FadeUp";


function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-3">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value || " "}</span>
    </div>
  );
}

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  // console.log(userData, 'userData');
  // console.log(userData.data?.user, 'user');


  return (
    <FadeUp>
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-0 space-y-6 my-20">

        <Card className="relative flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl border shadow-sm border-purple-300">

          <div className="absolute top-4 right-4">
            <UpdateModal />
          </div>

          <div className="flex items-center gap-5">
            <Avatar className="h-30 w-30 ring-4 ring-purple-300">
              <Avatar.Image
                src={user?.image}
                alt={user?.name || "User"}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>
                {user?.name?.charAt(0) || "U"}
              </Avatar.Fallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-semibold">
                {user?.name || "User Name"}
              </h2>

              <div className="flex items-center gap-2 text-gray-500 text-sm mt-1 font-medium">
                <Mail size={16} />
                {user?.email || "No Email"}
              </div>

              <div className="flex items-center gap-3 mt-2">
                <span className="bg-purple-100 text-purple-500 text-xs px-3 py-1 rounded-full font-medium">
                  Premium
                </span>

                <span className="flex items-center gap-1 text-xs bg-gray-100 px-3 py-1 rounded-full font-medium text-gray-600">
                  <Calendar size={14} className="flex items-center" />
                  {user?.updatedAt
                    ? new Date(user.updatedAt).toLocaleDateString("en-BD", {
                      dateStyle: "medium",
                    })
                    : "Not Available"}
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 rounded-2xl border shadow-sm border-purple-300">
          <h3 className="text-sm tracking-widest text-gray-500 mb-6 font-semibold">
            ACCOUNT INFORMATION
          </h3>

          <div className="space-y-4 text-sm font-medium text-gray-700">
            <InfoRow label="Name" value={user?.name} />
            <InfoRow label="Email" value={user?.email} />
            <InfoRow
              label="Last Updated"
              value={
                user?.updatedAt
                  ? new Date(user.updatedAt).toLocaleString("en-BD", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })
                  : "Not Available"
              } />
            <InfoRow label="Account Type" value="Premium" />
          </div>
        </Card>
      </div>
    </FadeUp>
  );
};

export default ProfilePage;