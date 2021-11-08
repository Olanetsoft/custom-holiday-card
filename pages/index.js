import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import TransformImage from "../components/image";
import diwaliMessages from "../utils/diwali.messages.json";
import harvestMessages from "../utils/harvest.messages.json";
import thanksGivingMessages from "../utils/thanksgiving.messages.json";

export default function Home() {
  const [tab, setTab] = useState("harvest");
  const [imageId, setImageId] = useState("");
  const [font, setFont] = useState("Sacramento");
  const [text, setText] = useState("Change Text");

  const openWidget = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "olanetsoft",
        uploadPreset: "w42epls6",
      },
      (error, result) => {
        if (result.event === "success") {
          setImageId(result.info.public_id);
        }
      }
    );
    widget.open(); // open up the widget after creation
  };

  const handleSelect = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-10">
      <Head>
        <title>Holiday Card</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Head>

      <main className="">
        <h1 className="text-4xl text-center">Custom Holiday Card Generator</h1>
        <header className="flex border-b-2 mt-7 mb-7">
          <Link href="#">
            <a
              className={`text-base capitalize mr-8 pb-4 ${
                tab === "harvest"
                  ? "font-bold border-b-4 border-[#1D4ED8] text-[#1D4ED8]"
                  : "text-[#5A5A7D]"
              } `}
              onClick={() => setTab("harvest")}
            >
              harvest month
            </a>
          </Link>

          <Link href="#">
            <a
              className={`text-base capitalize mr-8 pb-4 ${
                tab === "diwali"
                  ? "font-bold border-b-4 border-[#1D4ED8] text-[#1D4ED8]"
                  : "text-[#5A5A7D]"
              } `}
              onClick={() => setTab("diwali")}
            >
              diwali
            </a>
          </Link>
          <Link href="#">
            <a
              className={`text-base capitalize mr-8 pb-4 ${
                tab === "thanksgiving"
                  ? "font-bold border-b-4 border-[#1D4ED8] text-[#1D4ED8]"
                  : "text-[#5A5A7D]"
              } `}
              onClick={() => setTab("thanksgiving")}
            >
              thanksgiving
            </a>
          </Link>
        </header>

        <section className="mb-6">
          <button
            type="button"
            className="bg-[#1D4ED8] py-3 px-3 rounded-[5px] text-white font-semibold"
            onClick={openWidget}
          >
            Upload Image
          </button>

          <h2 className="text-2xl block text-md text-[#000000] mb-2 mt-6">
            Set Custom Message and Font
          </h2>
          {tab === "harvest" ? (
            <div className="flex items-center">
              <div className="mb-6 mt-3">
                <select
                  className="origin-top-right absolute mt-4 w-76 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-8 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                  onChange={handleSelect}
                >
                  <option> Select Harvest Season Custom Message ⬇️</option>
                  {harvestMessages.map((s) => (
                    <option
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      key={s.id}
                      value={s.value}
                    >
                      {s.label}
                    </option>
                  ))}
                </select>
                <div class="mt-20 mb-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="Dancing Script"
                        name="Font"
                        onChange={(event) => setFont(event.target.value)}
                      />
                      <span class="ml-2">Dancing Script</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="roboto"
                        name="Font"
                        onChange={(event) => setFont(event.target.value)}
                      />{" "}
                      <span class="ml-2">Roboto</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="Sacramento"
                        name="Font"
                        onChange={(event) => setFont(event.target.value)}
                      />{" "}
                      <span class="ml-2">Sacramento</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : tab === "thanksgiving" ? (
            <div className="flex items-center">
              <div className="mb-6 mt-3">
                <select
                  className="origin-top-right absolute mt-4 w-76 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-8 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                  onChange={handleSelect}
                >
                  <option>
                    Select a Thanksgiving Season Custom Message ⬇️
                  </option>
                  {thanksGivingMessages.map((s) => (
                    <option
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      key={s.id}
                      value={s.value}
                    >
                      {s.label}
                    </option>
                  ))}
                </select>
                <div class="mt-20 mb-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="Dancing Script"
                        name="Font"
                        onChange={(event) => setFont(event.target.value)}
                      />
                      <span class="ml-2">Dancing Script</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="roboto"
                        name="Font"
                        onChange={(event) => setFont(event.target.value)}
                      />{" "}
                      <span class="ml-2">Roboto</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="Sacramento"
                        name="Font"
                        onChange={(event) => setFont(event.target.value)}
                      />{" "}
                      <span class="ml-2">Sacramento</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="mb-6 mt-3">
                <select
                  className="origin-top-right absolute mt-4 w-76 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-8 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                  onChange={handleSelect}
                >
                  <option> Select a Diwali Season Custom Message ⬇️</option>
                  {diwaliMessages.map((s) => (
                    <option
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      key={s.id}
                      value={s.value}
                    >
                      {s.label}
                    </option>
                  ))}
                </select>
                <div class="mt-20 mb-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="Dancing Script"
                        name="Font"
                        onChange={(event) => setFont(event.target.value)}
                      />
                      <span class="ml-2">Dancing Script</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="roboto"
                        name="Font"
                        onChange={(event) => setFont(event.target.value)}
                      />{" "}
                      <span class="ml-2">Roboto</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        value="Sacramento"
                        name="Font"
                        onChange={(event) => setFont(event.target.value)}
                      />{" "}
                      <span class="ml-2">Sacramento</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        {(imageId && (
          <div className="mt-10">
            <TransformImage font={font} text={text} image={imageId} />
          </div>
        )) || (
          <h2 className="text-2xl mt-3">The result will be displayed here</h2>
        )}
      </main>
    </div>
  );
}
