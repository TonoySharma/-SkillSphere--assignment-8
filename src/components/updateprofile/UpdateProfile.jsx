"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaRegUser } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

export function UpdateModal() {
  const onsubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const image = e.target.image.value;

    // console.log({ image, name })
    await authClient.updateUser({
      image,
      name
    })
  }


  return (
    <Modal>
      <Button variant="" className=' bg-purple-50 hover:bg-purple-100'><MdModeEdit /></Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaRegUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">

                <form onSubmit={onsubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">Save</Button>
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