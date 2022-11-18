import { Friend } from "./Friend.js";
export const NewFriend = (props) => {
  return (
    <div>
      <Friend />
      <img src={props.src} />
    </div>
  );
};

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById("app")
);
