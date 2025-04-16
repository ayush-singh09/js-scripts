console.log("Hello from Scripts");
alert("hello from script.");

const fun = (API) => {
    console.log(API);
    
  const genAI = new window.GoogleGenerativeAI(API);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const run = async () => {
    const prompt = "What is the cost of AK-47";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  };

  run();
};

window.fun = fun;
