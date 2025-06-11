import Frame from "./Frame";

type ViewerProps = {
    title: string;
    logo: string;
    onClose:any;
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    args: {image: string};
    onClick: (id: number) => void;
    isActive: boolean;
    isFullSized?: boolean;
};

export default function Viewer({ id, title, logo, onClose, x, y, width, height, args, onClick, isActive, isFullSized }: ViewerProps) { 
    const image_path = args?.image!;
    const file_name = image_path.split('/')[image_path.split('/').length-1].split('.jpeg')[0];
    return (
            <Frame
                id={id}
                title={`${file_name} - ${title}`}
                logo={logo}
                onClose={onClose}
                x={x}
                y={y}
                width={width}
                height={height}
                lockAspectRatio={true}
                onClick={onClick}
                isActive={isActive}
                isNotmaximizable={true}
                isFullSized={isFullSized}
            >
                {
                    <div className="w-full h-full bg-no-repeat bg-[position:right_top] bg-[length:85%_80%]"
                    style={{
                        backgroundImage:`url(${args?.image})`,
                    }}>
                        <div>
                            
                        </div>
                        <img className="w-full h-full" src={"./assets/png/framework_test.png"} alt={args?.image} />
                    </div>

                    //  <div className="w-full h-full bg-no-repeat bg-cover"
                    // style={{
                    //     backgroundImage:'url(./assets/png/framework_test.png)',
                    // }}>
                    //     <img src={args?.image} alt={args?.image} />
                    // </div>
                }
            </Frame>
    );
}