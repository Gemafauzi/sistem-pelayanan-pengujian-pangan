import { Image, Button } from "@nextui-org/react";
import { useRef } from "react";
import { FaUser } from "react-icons/fa";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ProfilePicture = ({ profilePicture, setProfilePicture }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="flex flex-col items-center gap-4">
      {profilePicture ? (
        <Image
          width={130}
          src={URL.createObjectURL(profilePicture)}
          fallbackSrc="https://via.placeholder.com/130x160"
          alt="Profile Picture"
          className="min-w-[130px] h-[160px] object-cover rounded-none"
        />
      ) : (
        <div className="w-[130px] h-[160px] bg-[#D9D9D9] px-4 py-6 flex items-center justify-center">
          <FaUser className="text-[95px] text-black" />
        </div>
      )}

      <Button
        color="primary"
        radius="sm"
        className="min-w-[130px] lg:w-full"
        onClick={handleButtonClick}
      >
        {profilePicture ? "Ganti Foto" : "Pilih Foto"}
      </Button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => setProfilePicture(e.target.files[0])}
      />
    </section>
  );
};

export default ProfilePicture;
