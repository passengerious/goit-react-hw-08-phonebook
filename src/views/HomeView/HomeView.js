import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <>
      <h1 className={s.text}>
      Feel safe storing your contacts here!
      </h1>
      <img
        src="https://s34506.pcdn.co/wp-content/uploads/2020/08/maildiy8.jpg"
        alt="cat"
        className={s.image}
      />
    </>
  );
}
