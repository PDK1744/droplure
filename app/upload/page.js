"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);

 

  const handleUpload = async () => {
    if (!file || !senderEmail || !recipientEmail) {
        alert("All fields are required");
        return;
    }

    setUploading(true);

    try {
      // TODO: Encrypt file before upload

      // TODO: Upload to Supabase Storage

      // TODO: Save metadata to Supabase Database

      // TODO: Generate download link
      setUploadSuccess(true);
    } catch (error) {
      console.error("Upload error: ", error);
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };
  return (
    <main className="min-h-screen px-6 py-16 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
          <h1 className="text-2xl font-bold mb-4">Send a file</h1>
  
          {uploadSuccess ? (
              <div className="text-center p-4 bg-green-100 border border-green-400 rounded">
                  <p className="text-green-700 font-semibold">File uploaded successfully!</p>
                  <p className="tet-sm mt-2 text-gray-600">The recipient will receive a download link via email</p>
              </div>
          ) : (
              <form onSubmit={(e) => {
                  e.preventDefault();
                  handleUpload();
              }}
              className="space-y-4"
              >
                  <div className="mb-4">
                      <label className="block font-medium">Select File</label>
                      <input
                          type="file"
                          onChange={(e) => setFile(e.target.files?.[0] || null)}
                          className="mt-1 block w-full text-sm mb-6 hover:text-amber-700"
                      />
  
                  <div className="mb-4">
                      <label className="block font-medium">Your Email</label>
                      <input
                          type="email"
                          value={senderEmail}
                          onChange={(e) => setSenderEmail(e.target.value)}
                          required
                          className="mt-1 w-full p-2 border rounded"
                      />
                  </div>
  
                  <div className="mb-4">
                  <label className="block font-medium">Recipient's Email</label>
                      <input
                          type="email"
                          value={recipientEmail}
                          onChange={(e) => setRecipientEmail(e.target.value)}
                          required
                          className="mt-1 w-full p-2 border rounded"
                      />
                  </div>
                  <button
                      type="submit"
                      disabled={uploading}
                      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-amber-700 disabled:opacity-50"
                      >{uploading ? "Uploading..." : "Send File"}</button>
                  </div>
              </form>
          )}
      </div>
    </main>
  );
}


