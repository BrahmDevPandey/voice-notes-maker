import icon from "./img/icon.png";
import fileUpload from "./img/file-upload-icon.png";
import { useState } from "react";

const App = () => {
  const [audio, setAudio] = useState();

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    uploadedFile && setAudio(URL.createObjectURL(uploadedFile));
  };

  return (
    <div className="w-full h-screen bg-orange-100 p-5">
      <section className="h-[15%] mb-3 px-5 flex gap-3 justify-between">
        <div className="flex gap-2">
          <img className="w-7 h-7 rounded-lg shadow-lg" src={icon} alt="icon" />
          <div className="text-2xl">Your Note Maker</div>
        </div>
        <div className="flex gap-2">
          <div>
            <audio
              controls
              autoPlay={false}
              className="h-8 w-96"
              src={audio}
            ></audio>
          </div>
          <div>
            <input
              type="file"
              id="file-input"
              accept="audio/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label htmlFor="file-input" className="cursor-pointer">
              <img className="mt-1 h-5" src={fileUpload} alt="File upload" />
            </label>
          </div>
        </div>
      </section>
      <section className="h-[70%] flex gap-3">
        <div className="w-[50%]">The generated text</div>
        <div className="w-[50%]">The key pointers</div>
      </section>
    </div>
  );
};

export default App;
