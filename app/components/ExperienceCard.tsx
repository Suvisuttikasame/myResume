import DefaultCard from "./DefaultCard";
import FlipedCard from "./FlipedCard";

type props = {
  clickedItem: string;
  arrExpCard: {
    companyName: string;
    role: string;
    responsibility: string;
    listInfo: string[];
    images: {
      url: string;
      alt: string;
    }[];
  }[];
};
export default function ExperienceCard({
  clickedItem,
  arrExpCard = [],
}: props) {
  return (
    <div className="w-96 h-72 relative rounded-md [transform-style:preserve-3d] bounce-animate transition-all ease-in-out  duration-1000 delay-150 hover:[transform:rotateY(180deg)] max-[400px]:w-11/12 max-[400px]:h-80">
      {arrExpCard.map((item, index) => {
        return (
          <FlipedCard
            key={index}
            clickedItem={clickedItem}
            companyName={item.companyName}
            role={item.role}
            responsibility={item.responsibility}
            listInfo={item.listInfo}
            images={item.images}
          />
        );
      })}
      <DefaultCard clickedItem={clickedItem} />
    </div>
  );
}
