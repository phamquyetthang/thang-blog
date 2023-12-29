import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Tag from "@theme/Tag";

import styles from "./index.module.css";
import HomepageCollaborators from "../components/HomepageFeatures";
import GiscusComponent from "../components/GiscusComponent";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            Đọc những bài viết của tôi
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <section className={clsx(styles.aboutMeSection)}>
          <div className="container">
            <div className={clsx("row", styles.aboutMe)}>
              <img
                className={styles.myAvatar}
                alt="Code đủ thứ"
                src={require("@site/static/img/thang.webp").default}
                width={120}
                height={187.33}
              />
              <div className={clsx("padding-horiz--md", styles.aboutMeDesc)}>
                <Heading as="h3">Phạm Quyết Thắng</Heading>
                <p>
                  Mình là một fullstack developer với nhiều năm kinh nghiệm và
                  niềm đam mê lập trình mãnh liệt. Mình lập lên trang blog này
                  với mong muốn chia sẻ kiến thức của mình với mọi người
                </p>
                <p>
                  <i>Skills:</i>{" "}
                  <Tag label="Typescript" permalink="blog/tags/typescript" />{" "}
                  <Tag label="React" permalink="blog/tags/react" />{" "}
                  <Tag label="Nodejs" permalink="blog/tags/nodejs" />{" "}
                  <Tag label="Nestjs" permalink="blog/tags/nestjs" />{" "}
                  <Tag label="Godot" permalink="blog/tags/godot" />
                </p>
              </div>
            </div>
          </div>
        </section>

        <HomepageCollaborators />
      </main>

      <div className="container">
        <div>
          <GiscusComponent />
        </div>
      </div>
    </Layout>
  );
}
