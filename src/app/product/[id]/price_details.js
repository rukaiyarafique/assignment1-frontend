import styles from "@/style/price_details.module.css";

export default function PriceDetails({ details }) {
  return (
    <>
      <div className={styles.name}>
        <b>Name: </b>
        {details.name}
      </div>
      <div>
        <b>Price: </b>
        {details.price}
      </div>
      <div className={styles.price}>
        <b>Size: </b>
        {details.size}
      </div>
      <div>
        <b>Gender: </b>
        {details.gender}
      </div>
    </>
  );
}
