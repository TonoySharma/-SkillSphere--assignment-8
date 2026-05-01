"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaRegUser } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

export function UpdateModal() {
  const onsubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      image,
      name,
    });
  };

  return (
    <Modal>
      <Button className="bg-purple-50 hover:bg-purple-100">
        <MdModeEdit  className="text-black"/>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-[92%] sm:w-full sm:max-w-md rounded-xl">

            <Modal.CloseTrigger />

            <Modal.Header className="flex items-center gap-3">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-lg sm:text-xl">
                Update User
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-4 sm:p-6">
              <Surface variant="default" className="p-4 sm:p-6 rounded-lg">

                <form onSubmit={onsubmit} className="flex flex-col gap-4">

                  <TextField className="w-full" name="name" type="text">
                    <Label className="text-sm sm:text-base">Name</Label>
                    <Input
                      placeholder="Enter your name"
                      className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                  </TextField>

                  <TextField className="w-full" name="image" type="url">
                    <Label className="text-sm sm:text-base">Image URL</Label>
                    <Input
                      placeholder="Image URL"
                      className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                  </TextField>

                  {/* Buttons responsive layout */}
                  <Modal.Footer className="flex flex-col sm:flex-row gap-2 sm:justify-end">

                    <Button
                      slot="close"
                      variant="secondary"
                      className="w-full sm:w-auto rounded border border-gray-300">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="w-full sm:w-auto rounded border border-gray-300 bg-blue-100 text-black hover:bg-blue-500 hover:text-white">
                      Save
                    </Button>

                  </Modal.Footer>

                </form>

              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}