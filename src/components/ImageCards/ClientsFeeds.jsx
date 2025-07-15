export default function ClientFeeds() {
  const imageUrls = [
    "/images/sclient4.png",
    "/images/sclient3.png",
    "/images/sclient2.png",
    "/images/sclient1.png",
    
  ];

  return (
    <div className="bg-transparent- shadow-md rounded-[100px] px-2 lg:justify-between lg:w-[270px] lg:h-[60px] h-[52px] w-[220px] flex items-center bg-[#a9a5a539]  ">
      <div className="flex gap-2 w-[112px] h-[39px] ">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Avatar ${index + 1}`}
            className="lg:h-[48px] lg:w-[48px] w-[40px] h-[40px] rounded-[100px] mr-[-25%] lg:mr-[-23%] xl:mr-[-20%]"
          />
        ))}
      </div>
      <div className="lg:w-[100px] w-[76px] h-[39px] ">
        <p className="text-[15px] text-white font-medium">10k+</p>
        <p className="text-[10px] text-white">Satisfied Clients</p>
      </div>
     
    </div>
  );
}
