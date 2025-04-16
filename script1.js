console.log("Hello from Scripts");
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

const addPopup = () => {
  // Create popup container
  const popup = document.createElement("div");
  popup.classList.add(
    "popup",
    "w-96",
    "h-[500px]",
    "absolute",
    "top-1/2",
    "left-1/2",
    "translate-x-[-50%]",
    "translate-y-[-50%]",
    "bg-white",
    "rounded-lg",
    "border",
    "border-gray-200",
    "flex",
    "flex-col"
  );

  // Create top section (header)
  const header = document.createElement("div");
  header.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "p-4",
    "border-b",
    "border-gray-200"
  );
  const title = document.createElement("h3");
  title.classList.add("font-semibold", "text-gray-800");
  title.textContent = "Chat";

  const closeButton = document.createElement("button");
  closeButton.classList.add("text-gray-500", "hover:text-gray-700");
  const closeIcon = document.createElement("svg");
  closeIcon.classList.add("w-5", "h-5");
  closeIcon.setAttribute("fill", "none");
  closeIcon.setAttribute("stroke", "currentColor");
  closeIcon.setAttribute("viewBox", "0 0 24 24");
  const closePath = document.createElement("path");
  closePath.setAttribute("strokeLinecap", "round");
  closePath.setAttribute("strokeLinejoin", "round");
  closePath.setAttribute("strokeWidth", "2");
  closePath.setAttribute("d", "M6 18L18 6M6 6l12 12");
  closeIcon.appendChild(closePath);
  closeButton.appendChild(closeIcon);

  // Append header elements to the header
  header.appendChild(title);
  header.appendChild(closeButton);

  // Create chat messages container
  const messagesContainer = document.createElement("div");
  messagesContainer.classList.add("flex-1", "p-4", "overflow-y-auto");

  // Create input section
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("border-t", "border-gray-200", "p-4");
  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("flex", "items-center", "gap-2");

  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.classList.add(
    "flex-1",
    "rounded-full",
    "border",
    "text-black",
    "border-gray-300",
    "px-4",
    "py-2",
    "focus:outline-none",
    "focus:border-blue-500"
  );
  inputField.setAttribute("placeholder", "Type a message...");

  const sendButton = document.createElement("button");
  sendButton.classList.add(
    "bg-blue-500",
    "text-white",
    "rounded-full",
    "p-2",
    "hover:bg-blue-600",
    "rotate-90"
  );
  const sendIcon = document.createElement("svg");
  sendIcon.classList.add("w-5", "h-5");
  sendIcon.setAttribute("fill", "none");
  sendIcon.setAttribute("stroke", "currentColor");
  sendIcon.setAttribute("viewBox", "0 0 24 24");
  const sendPath = document.createElement("path");
  sendPath.setAttribute("strokeLinecap", "round");
  sendPath.setAttribute("strokeLinejoin", "round");
  sendPath.setAttribute("strokeWidth", "2");
  sendPath.setAttribute("d", "M12 19l9 2-9-18-9 18 9-2zm0 0v-8");
  sendIcon.appendChild(sendPath);
  sendButton.appendChild(sendIcon);

  // Append input elements to the input wrapper
  inputWrapper.appendChild(inputField);
  inputWrapper.appendChild(sendButton);

  // Append input wrapper to the input container
  inputContainer.appendChild(inputWrapper);

  // Append everything to the popup
  popup.appendChild(header);
  popup.appendChild(messagesContainer);
  popup.appendChild(inputContainer);

  // Append popup to the body
  document.body.appendChild(popup);
};

window.addPopup = addPopup;