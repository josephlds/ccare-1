interface SimpleButton {
  text: string;
}

const SimpleButton = ({ text }: SimpleButton) => {
  return (
    <button className="focus:outline-none px-5 py-3 text-[#866AAB] border-2 border-[#866AAB] hover:bg-[#866AAB] hover:text-white transition duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default SimpleButton;
