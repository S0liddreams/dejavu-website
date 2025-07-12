export default function ClientFeeds() {
  const imageUrls = [
    "/images/sclient4.png",
    "/images/sclient3.png",
    "/images/sclient2.png",
    "/images/sclient1.png",
    
  ];

  return (
    <div className="bg-transparent- shadow-md rounded-[100px] px-2 xl:w-[270px] xl:h-[60px] xl:flex items-center ">
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
      <div className="xl:w-[100px]">
        <p className="xl:text-[20px] text-black font-medium">10k+</p>
        <p className="xl:text-[10px] text-black">Satisfied Clients</p>
      </div>
     
    </div>
  );
}
