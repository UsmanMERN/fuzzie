import React from 'react';
import { CardBody, CardItem, ThreeDCard } from './global/3d-card';
import { CheckIcon, MoveRight } from 'lucide-react';
interface CardData {
    title: string;
    price: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonAction: string;
}

interface Props {
    data: CardData[];
}

const CardGroup: React.FC<Props> = ({ data }) => {
    return (
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
            <ThreeDCard key={index} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                    <CardItem className="text-xl font-bold text-neutral-600 dark:text-white" translateZ={"50"}>
                        {card.title} <h2 className="text-6xl">{card.price}</h2>
                    </CardItem>
                    <CardItem className="text-sm text-neutral-500 max-w-sm mt-2 dark:text-neutral-300" translateZ={"60"}>
                        {card.description}
                        <ul className="my-4 flex flex-col gap-2">
                            {card.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2"><CheckIcon /> {feature}</li>
                            ))}
                        </ul>
                    </CardItem>
                    <div className="flex justify-between items-center mt-8">
                        <CardItem translateZ={20} as={'button'} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                            <span>{card.buttonText} <MoveRight className="inline" /></span>
                        </CardItem>
                        <CardItem translateZ={20} as={'button'} className="px-4 py-2 rounded-xl text-xs font-bold bg-black dark:bg-white dark:text-black text-white">
                            {card.buttonAction}
                        </CardItem>
                    </div>
                </CardBody>
            </ThreeDCard>
        </div>
    );
};

export default CardGroup;
