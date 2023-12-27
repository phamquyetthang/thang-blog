import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Đặng Anh Sơn",
    image: require("@site/static/img/son.jpg").default,
    description: (
      <>
        "Trên một con đường nhỏ <br />
        Dưới một ánh chiều vàng <br />
        Trọng lực ghim đầu bút <br />
        Nhặt những dòng ngổn ngang,"
      </>
    ),
  },
  {
    title: "Lượn vượn vườn thơ",
    image: require("@site/static/img/sieg.jpg").default,
    description: (
      <>
        Cộng đồng những bạn trẻ yêu thơ. Những gì chúng mình viết lại không phải
        là những bài thơ để đời, chỉ đơn giản là những dòng cảm xúc bất chợt đến
        và đi, 
        <br />
        <a target="_blank" href="https://www.facebook.com/ape.poem">
          facebook
        </a>
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageCollaborators(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <Heading as="h3">Mình không cô đơn</Heading>
          <h4>
            Những người bạn tuyệt vời đã cùng mình xây dựng trang web này:
          </h4>
        </div>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
