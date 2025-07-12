export default function ClientFeeds() {
  const imageUrls = [
    "/images/sclient4.png",
    "/images/sclient3.png",
    "/images/sclient2.png",
    "/images/sclient1.png",
    
  ];

  return (
    <div className="bg-transparent- shadow-md rounded-[100px] px-2 lg:w-[270px] lg:h-[60px] lg:flex items-center bg-[#a9a5a539]  ">
      <div className="flex gap-2">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Avatar ${index + 1}`}
            className="h-[48px] w-[48px] rounded-[100px] mr-[-10%]"
          />
        ))}
      </div>
      <div className="lg:w-[100px] ">
        <p className="lg:text-[20px] text-white font-medium">10k+</p>
        <p className="lg:text-[10px] text-white">Satisfied Clients</p>
      </div>
     
    </div>
  );
}
