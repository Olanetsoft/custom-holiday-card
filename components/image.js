import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { useEffect, useRef, useState } from "react";

const TransformImage = ({ font, text, image }) => {
  const ref = useRef(null);
  const [url, setURL] = useState("");
  const [copy, setCopy] = useState("Copy File");

  useEffect(() => {
    setURL(ref.current.element.current.src);
    return () => {};
  }, [font, text, image]);

  const handleCopyToClip = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => setCopy("Copied!"))
      .catch((err) => console.log("error copying to clipboard", err));
  };

  return (
    <div>
      <CloudinaryContext cloudName="olanetsoft">
        <Image publicId={image} secure="true" ref={ref} width="700">
          <Transformation
            overlay={`text:${font}_65_bold:${text}`}
            gravity="north"
            y="300"
          />
        </Image>
      </CloudinaryContext>

      <div className="mt-5">
        <h5>Shareable link</h5>
        <input
          disabled
          value={url}
          className="w-full lg:w-2/5 h-10 border-[#B7B3B3] border rounded-sm p-2 mr-4"
        />
        <button
          className="bg-gray-600 py-2 px-6 rounded-[5px] text-white font-semibold"
          onClick={handleCopyToClip}
        >
          {copy}
        </button>
      </div>
    </div>
  );
};

export default TransformImage;
