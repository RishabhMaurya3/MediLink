import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const symptomChecker = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms) {
      return res.json({
        success: false,
        message: "Symptoms are required",
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are a medical AI assistant.

Analyze these symptoms:
${symptoms}

Return response STRICTLY in this format:

Disease:
<possible disease>

Doctor:
<recommended specialist>

Urgency:
<Low/Medium/High>

Advice:
<short advice>

Keep answer short and simple.
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    res.json({
      success: true,
      data: response,
    });

  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { symptomChecker };