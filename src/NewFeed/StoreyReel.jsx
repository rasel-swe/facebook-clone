import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import { useStateValue } from "../Redux/StateProvider";

const StoreyReel = () => {
  const [{ user }, dispatch] = useStateValue("");
  return (
    <div className="storyreel">
      <Story
        src={user.photoURL}
        image={user.photoURL}
        title={user.displayName}
      />
      <Story
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoey4aGgLRG1oQIy2IDIuzv5W88mmFsoF8JEwOOwqNF24Rbr-FyGHw40-ewlJqh8BeNk&usqp=CAU"
        image="https://www.dailypioneer.com/uploads/2019/story/images/big/microsoft-bidding-farewell-to-iconic-windows-games-2019-07-13.jpg"
        title="Microsoft"
      />
      <Story
        src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/s1cihnpc1cnekihotv0e"
        image="https://bl-i.thgim.com/public/incoming/3vcwpo/article67302184.ece/alternates/FREE_1200/2023-09-12T210216Z_283215480_RC2773AI723A_RTRMADP_3_APPLE-EVENT-AI.JPG"
        title="Apple"
      />
      <Story
        src="https://androidkenya.com/wp-content/uploads/2023/02/Nokia_new_logo.jpg"
        image="https://history-computer.com/wp-content/uploads/2022/09/Nokia-1110.jpg"
        title="Nokia"
      />
    </div>
  );
};

export default StoreyReel;
