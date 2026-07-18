import React, { useState } from "react";
import axios from "axios";

const AISymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const checkSymptoms = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:4000/api/ai/symptom-checker",
        { symptoms }
      );

      if (data.success) {
        setResult(data.data);
      }

      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-5">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          AI Symptom Checker
        </h1>

        <textarea
          rows="6"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Describe your symptoms..."
          className="w-full border rounded-lg p-4 outline-none"
        />

        <button
          onClick={checkSymptoms}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700"
        >
          {loading ? "Analyzing..." : "Check Symptoms"}
        </button>

        {result && (
          <div className="mt-6 bg-gray-100 p-5 rounded-lg whitespace-pre-line">
            {result}
          </div>
        )}

      </div>
    </div>
  );
};

export default AISymptomChecker;