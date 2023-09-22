import React, { useState } from "react";
import SlidebarRaw from "./SlidebarRaw";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HistoryIcon from "@mui/icons-material/History";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Groups2Icon from "@mui/icons-material/Groups2";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CampaignTwoToneIcon from "@mui/icons-material/CampaignTwoTone";
import EqualizerTwoToneIcon from "@mui/icons-material/EqualizerTwoTone";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SendIcon from "@mui/icons-material/Send";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import "./Slidebar.css";
import { useStateValue } from "./Redux/StateProvider";
import Shortcuts from "./Slidebar/Shortcuts";

const Slidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  const [showMore, setShowMore] = useState(false);

  // Define the list of items for the sidebar
  const itemsToShow = showMore
    ? [
        { Icon: PeopleAltIcon, title: "Friends" },
        { Icon: StorefrontIcon, title: "Marketplace" },
        { Icon: HistoryIcon, title: "Memories" },
        { Icon: BookmarksIcon, title: "Saved" },
        { Icon: CampaignTwoToneIcon, title: "Ad Center" },
        { Icon: EqualizerTwoToneIcon, title: "Ads Manager" },
        { Icon: BloodtypeIcon, title: "Blood Donation" },
        { Icon: NaturePeopleIcon, title: "Climate Science Center" },
        { Icon: CalendarMonthIcon, title: "Events" },
        { Icon: DynamicFeedIcon, title: "Feeds" },
        { Icon: VolunteerActivismIcon, title: "Fundaries" },
        { Icon: SportsEsportsIcon, title: "Gaming Video" },
        { Icon: SendIcon, title: "Messenger" },
        { Icon: SendTimeExtensionIcon, title: "Messenger Kids" },
        { Icon: CreditCardIcon, title: "Orders and Payments" },
        { Icon: NewspaperIcon, title: "Pages" },
        { Icon: VideogameAssetIcon, title: "Play games" },
        { Icon: LocalActivityIcon, title: "Recent ad activity" },
      ]
    : [
        { Icon: PeopleAltIcon, title: "Friends" },
        { Icon: StorefrontIcon, title: "Marketplace" },
        { Icon: HistoryIcon, title: "Memories" },
        { Icon: BookmarksIcon, title: "Saved" },
        { Icon: Groups2Icon, title: "Groups" },
        { Icon: OndemandVideoIcon, title: "Videos" },
        { Icon: DynamicFeedIcon, title: "Feeds" },
      ];

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="Slidebar">
      <SlidebarRaw src={user.photoURL} title={user.displayName} />
      {itemsToShow.map((item, index) => (
        <SlidebarRaw key={index} Icon={item.Icon} title={item.title} />
      ))}
      <div className="see-more-button" onClick={toggleShowMore}>
        <SlidebarRaw
          Icon={showMore ? KeyboardArrowDownIcon : null}
          title={showMore ? "See Less" : "See More"}
        />
      </div>
      <Shortcuts />
    </div>
  );
};

export default Slidebar;
