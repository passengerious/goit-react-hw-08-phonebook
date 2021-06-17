import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <>
      <h1 className={s.text}>
        Welcome to the best app for storing your contacts!
      </h1>
      <img
        src="https://99px.ru/sstorage/56/2011/02/image_562202111206283652131.jpg"
        alt="cat"
        className={s.image}
      />
    </>
  );
}
