// app/page.js
export default function Home() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      <div className="w-[8%] h-[5%] left-[85%] top-[4%] absolute">
        <div className="w-full h-full left-0 top-0 absolute bg-[#eaecd7] rounded-[49px] absolute z-20" />
        <div className="w-full h-full left-[5px] top-[5px] absolute bg-[#75241e] rounded-[49px] absolute z-10" />
        <div className="left-[50%] top-[50%] absolute transform -translate-x-1/2 -translate-y-1/2 justify-start text-[#db4439] text-base font-black font-['Inknut_Antiqua'] absolute z-30">Click</div>
      </div>
      <div className="origin-top-left rotate-[8.64deg] w-[30%] h-[40%] left-[60%] top-[20%] absolute">
        <img className="w-full h-full left-[15%] top-[-10%] absolute" src="coffee.jpg.webp" />
      </div>
      <div className="w-[20%] left-[8%] top-[27%] absolute justify-start text-[#eaecd7] text-[5vw] font-black font-['Inknut_Antiqua'] leading-[1.2em]">BlaBla Coffee!</div>
      <div className="w-[40%] left-[8%] top-[64%] absolute justify-start text-[#eaecd7] text-[2vw] font-semibold font-['Inknut_Antiqua'] leading-[1.2em]">Your NO.1 Choice</div>
      <div className="left-[4%] top-[4%] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Menu</div>
      <div className="left-[15%] top-[4%] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Home</div>
      <div className="left-[26%] top-[4%] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Login</div>
      <div className="w-full h-[10%] left-0 top-[90%] absolute bg-white" />
      <div className="left-[7%] top-[93%] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[1.2em]">Contact Information</div>
      <div className="left-[44%] top-[93%] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[1.2em]">Consumer Policy</div>
      <div className="left-[81%] top-[93%] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[1.2em]">Be our partner today</div>
    </div>
  );
}