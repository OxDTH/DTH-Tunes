const DownloadAppPage = () => {
    return (
        <div className="bg-zinc-800 text-white flex items-center justify-center min-h-screen sm:px-4">
          <div className="bg-black text-white flex flex-col items-center justify-center py-10 px-6 border border-zinc-600 rounded-lg">
            <h1 className="text-3xl font-semibold text-center mb-4">Download the DTHTunes App</h1>
            <p className="text-center text-zinc-300 mb-6">
            Experience music like never before. Get the app now only on windows platform.
            <br />
            <br />
            Note: Android & iOS will release later.
            </p>
            <div className="flex gap-4">
              <a
                href="https://drive.google.com/drive/folders/1kYE-2i2bGxxlwRNYg_BDw2nhgmNTGvBa?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-zinc-600 text-white px-6 py-2 rounded-lg flex items-center hover:bg-zinc-800"
              >
                <img
                  src="/Microsoft.png"
                  alt="Microsoft Image"
                  className="w-28"
                />
              </a>
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-zinc-600 text-white px-6 py-2 rounded-lg flex items-center hover:bg-zinc-800"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="w-28"
                />
              </a> */}
            </div>
          </div>
        </div>
    );
};

export default DownloadAppPage;
