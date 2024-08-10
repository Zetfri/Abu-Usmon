import React from 'react';
import Img01 from"../../asstes/travel2.jpg";
import Img02 from"../../asstes/umra/photo_2_2024-08-10_18-07-10.jpg";
import Img03 from"../../asstes/umra/photo_3_2024-08-10_18-07-10.jpg";
import Img04 from"../../asstes/umra/photo_4_2024-08-10_18-07-10.jpg";
import Img05 from"../../asstes/umra/photo_5_2024-08-10_18-07-10.jpg";
import Img06 from"../../asstes/umra/photo_6_2024-08-10_18-07-10.jpg";
import Img07  from"../../asstes/umra/photo_7_2024-08-10_18-07-10.jpg";
import Img08 from"../../asstes/umra/photo_10_2024-08-10_18-07-10.jpg";
import Img09 from"../../asstes/umra/photo_11_2024-08-10_18-07-10.jpg";
import Img010 from"../../asstes/umra/photo_12_2024-08-10_18-07-10.jpg";
import Img011 from"../../asstes/umra/photo_13_2024-08-10_18-07-10.jpg";
import Img012 from"../../asstes/umra/photo_14_2024-08-10_18-07-10.jpg";
import Img013 from"../../asstes/umra/photo_15_2024-08-10_18-07-10.jpg";
import Img014 from"../../asstes/umra/photo_16_2024-08-10_18-07-10.jpg";
import Img015 from"../../asstes/umra/photo_17_2024-08-10_18-07-10.jpg";
import Img016 from"../../asstes/umra/photo_16_2024-08-10_18-07-10.jpg";
import Img017 from"../../asstes/umra/photo_19_2024-08-10_18-07-10.jpg";
import Img018 from"../../asstes/umra/photo_20_2024-08-10_18-07-10.jpg";
import Img019 from"../../asstes/umra/photo_21_2024-08-10_18-07-10.jpg";
import Img020 from"../../asstes/umra/photo_22_2024-08-10_18-07-10.jpg";
import Img021 from"../../asstes/umra/photo_23_2024-08-10_18-07-10.jpg";
import Img022 from"../../asstes/umra/photo_3_2024-08-10_18-07-10.jpg";
// import Img023 from"../../asstes/umra/photo_1_2024-08-10_18-07-10.jpg";
import Img024 from"../../asstes/umra/photo_11_2024-08-10_18-07-10.jpg";
import Img025 from"../../asstes/umra/photo_6_2024-08-10_18-07-10.jpg";

import { Image } from 'antd';
import Footer from "../Footer/footer.jsx";

const App = () => (
    <div>
    <div className="w-full h-auto flex justify-center items-center">
        <div className="w-full h-auto flex flex-wrap justify-center items-center gap-4 mt-14">
            <Image width={300} height={300} src={Img01} />
            <Image width={300} height={300} src={Img02} />
            <Image width={300} height={300} src={Img03} />
            <Image width={300} height={300} src={Img04} />
            <Image width={300} height={300} src={Img05} />
            <Image width={300} height={300} src={Img06} />
            <Image width={300} height={300} src={Img07} />
            <Image width={300} height={300} src={Img08} />
            <Image width={300} height={300} src={Img09} />
            <Image width={300} height={300} src={Img010} />
            <Image width={300} height={300} src={Img011} />
            <Image width={300} height={300} src={Img012} />
            <Image width={300} height={300} src={Img013} />
            <Image width={300} height={300} src={Img014} />
            <Image width={300} height={300} src={Img015} />
            <Image width={300} height={300} src={Img016} />
            <Image width={300} height={300} src={Img017} />
            <Image width={300} height={300} src={Img018} />
            <Image width={300} height={300} src={Img019} />
            <Image width={300} height={300} src={Img020} />
            <Image width={300} height={300} src={Img021} />
            <Image width={300} height={300} src={Img022} />
            {/*<Image width={300} height={300} src={Img023} />*/}
            <Image width={300} height={300} src={Img024} />
            <Image width={300} height={300} src={Img025} />

        </div>
        </div>
        <Footer/>
    </div>
);

export default App;
