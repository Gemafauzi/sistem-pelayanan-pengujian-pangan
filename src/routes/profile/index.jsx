import DataProfile from "@/components/profile/DataProfile";
import ProfilePicture from "@/components/profile/ProfilePicture";
import useForm from "@/libs/hooks/useForm";
import { useState } from "react";
import useModalInfo from "@/libs/hooks/useModalInfo";

export default function Profile() {
  const { openModal } = useModalInfo();

  const { form: formProfile, handleChange } = useForm({
    name: "",
    email: "",
    phone: "",
    gender: "",
    birthday: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);

  const onSave = (e) => {
    e.preventDefault();

    openModal("Data Diri Berhasil Diubah !");
  };

  return (
    <main className="container flex flex-col justify-center max-w-5xl gap-6 py-20 grow">
      <h1 className="text-3xl font-semibold text-center">Edit Profil Anda</h1>

      <form onSubmit={onSave} className="flex flex-col gap-12 lg:flex-row">
        <ProfilePicture
          profilePicture={profilePicture}
          setProfilePicture={setProfilePicture}
        />
        <DataProfile formProfile={formProfile} handleChange={handleChange} />
      </form>
    </main>
  );
}
