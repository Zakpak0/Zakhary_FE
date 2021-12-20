import Head from "next/head";
import Image from "next/image";
import { theme, styled } from "../stitches.config";
import { blackA, lime, limeA, mint } from "@radix-ui/colors";
import styles from "../styles/Home.module.css";
import Bar from "../components/Bar"
import Switch from "../components/Switch"
import Scroll from "../components/Scroll"
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import PluralsightSection from "../profile_sections/Pluralsight/PluralsightSection.js";
import GithubSection from "../profile_sections/Github/GithubSection.js";
import CalendarSection from "../profile_sections/Calendar/CalendarSection.js";
import LeetcodeSection from "../profile_sections/Leetcode/LeetcodeSection.js";
import { useEffect, useState } from "react";
import ProgressBar from "../components/Progress";
export default function Home() {
  const [themeMode, setThemeMode] = useState(true)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    let count = 0
    let interval = setInterval(() => {
      count += 20
      setProgress(count)
      console.log(progress)
      if (count == 120) {
        console.log("hi")
        setLoading(false)
        clearInterval(interval)
      }
    }, 500)
  }, [])

  const H1 = styled('h1', {})
  const P = styled('p', {})
  const H2 = styled('h2', {})
  const A1 = styled("a", {
    margin: "1rem",
    padding: "1.5rem",
    textAlign: "left",
    color: "inherit",
    textDecoration: "none",
    border: "1px solid #eaeaea",
    borderRadius: "10px",
    transition: "color 0.15s ease, border-color 0.15s ease",
    maxWidth: "max-content"
  })
  // RGB(72, 213, 183)
  // RGB(183, 213, 72)
  // rgb(9, 52, 46)
  // rgb(46, 52, 9)
  function nameToRgba(name) {
    const image = () => <Image src={name} height={"10px"} width={"10px"} />
    return console.log(image());
  }
  nameToRgba(mint.mint12)
  const NoA = styled("div", {
    background: themeMode ? `${theme.colors.container}` : `${theme.colors.containerDark}`,
    margin: "1rem",
    padding: "1.5rem",
    textAlign: "left",
    color: "inherit",
    textDecoration: "none",
    border: "solid",
    borderRadius: "10px",
    transition: "color 0.15s ease, border-color 0.15s ease",
    height: "max-content",
    width: "max-content",
    borderColor: "Black",
    borderWidth: "0.005rem"
  })
  const Main = styled("main", {
    border: "1px solid #eaeaea",
    background: themeMode ? 'White' : "Black",
    borderRadius: "10px",
    transition: "color 0.15s ease, border-color 0.15s ease",
    minHeight: '1000vh',
    padding: "4rem 0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center"

  })
  const Div = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: `"calendar calendar  leetcode leetcode"
    "pluralsight  pluralsight pluralsight pluralsight "
    ". github github ."
    `,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "1500px"
  });
  return (
    <>
      {loading ? <> <ProgressBar progress={progress} /> </> :
        <>
          <Bar Item={Switch}
            setThemeMode={setThemeMode}
            themeMode={themeMode}
            height={window.innerHeight}
            width={window.innerWidth}
          />
          <Scroll
            display={"flex"}
            flexGrow={1}
            height={window.innerHeight}
            width={window.innerWidth}
            content={
              <>
                <div className={styles.container}>
                  <Head>
                    <title>Zakhary Oliver</title>
                    <meta
                      name="Zakhary Oliver's portfolio"
                      content="Generated by create next app"
                    />
                    <link
                      rel="icon"
                      href="https://lh3.googleusercontent.com/a-/AOh14Gi_P_FSiBCwqZgeBLmzPUzlTi98EvTEzWlN_Fdp=s288-p-rw-no"
                    />
                  </Head>
                  <Main>
                    <H1>
                      Welcome to{" "}
                      <a href="https://www.linkedin.com/in/zakhary-oliver-81141b211/">
                        Zakhary Oliver's Portfolio
                      </a>
                    </H1>

                    <P>
                      Schedule a appointment with me <code>/calendar</code>
                    </P>
                    <Div>

                      <NoA
                        css={{
                          gridArea: "calendar"
                        }}
                      >
                        <H2>Calendar</H2>
                        <P>Schedule an appointment here</P>
                        <CalendarSection themeMode={themeMode} theme={theme} />
                      </NoA>
                      <NoA
                        css={{
                          gridArea: "leetcode"
                        }}
                      >
                        <H2>Problem Solving Skills</H2>
                        <P>Leet Code</P>
                        <LeetcodeSection themeMode={themeMode} theme={theme} />
                      </NoA>
                      <NoA
                        css={{
                          gridArea: "pluralsight",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center"

                        }}
                      >
                        <H2>Technical Skills</H2>
                        <P>Pluralsight</P>
                        <PluralsightSection themeMode={themeMode} theme={theme} />
                      </NoA>
                      <A1
                        css={{
                          gridArea: "github"
                        }}
                      >
                        <H2>Repositories</H2>
                        <P>Github profile</P>
                        {/* <GithubSection themeMode={themeMode} theme={theme} /> */}
                      </A1>
                    </Div>
                  </Main>
                </div>
      // </>
            }
          />
        </>
      }
    </>
  );
}