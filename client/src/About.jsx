import React from 'react';
import styles from './About.css';

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.header}>
        <div className={styles.wrapperAb1jpgParent}>
          <div className={styles.wrapperAb1jpg}>
            <img
              className={styles.ab1jpgIcon}
              loading="lazy"
              alt=""
              src="/ab1jpg@2x.png"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.historyContentParent}>
              <div className={styles.historyContent}>
                <a className={styles.ourHistory}>our history</a>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                  eiusmod tempor incidd ut labore rhei et dolore magna aliqua.
                  Ut enim ad veniam, quis laboris nisi ut aliquip ex ea commodo.
                  Duis aute irure dolor in repre voluptate in the velit esse.
                </p>
              </div>
              <div className={styles.divbeforeParent}>
                <div className={styles.divbefore} />
                <div className={styles.innerContentParent}>
                  <div className={styles.innerContent}>
                    <div className={styles.quotesParent}>
                      <b className={styles.quotes}>2002</b>
                      <b className={styles.quotes1}>2007</b>
                      <b className={styles.quotes2}>2012</b>
                      <b className={styles.quotes3}>2016</b>
                    </div>
                  </div>
                  <div className={styles.divParent}>
                    <div className={styles.div}>
                      <div className={styles.testimonialIcons}>
                        <div className={styles.i}>
                          <div className={styles.div1}></div>
                          <div className={styles.iChild} />
                        </div>
                      </div>
                      <p className={styles.duisAuteIrure}>
                        Duis aute irure dolor in reprehenderit in the voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Cupidatat non proident.
                      </p>
                    </div>
                    <div className={styles.div2}>
                      <div className={styles.iWrapper}>
                        <div className={styles.i1}>
                          <div className={styles.div3}></div>
                        </div>
                      </div>
                      <p className={styles.duisAuteIrure1}>
                        Duis aute irure dolor in reprehenderit in the voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Cupidatat non proident.
                      </p>
                    </div>
                    <div className={styles.div4}>
                      <div className={styles.iContainer}>
                        <div className={styles.i2}>
                          <div className={styles.div5}></div>
                        </div>
                      </div>
                      <p className={styles.duisAuteIrure2}>
                        Duis aute irure dolor in reprehenderit in the voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Cupidatat non proident.
                      </p>
                    </div>
                    <div className={styles.div6}>
                      <div className={styles.iFrame}>
                        <div className={styles.i3}>
                          <div className={styles.div7}></div>
                        </div>
                      </div>
                      <p className={styles.duisAuteIrure3}>
                        Duis aute irure dolor in reprehenderit in the voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Cupidatat non proident.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.historyImages} />
                <div className={styles.historyImages1} />
                <div className={styles.historyImages2} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.visionContentParent}>
        <div className={styles.visionContent}>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.visionAndMissionParent}>
                <h1 className={styles.visionAndMission}>vision and mission</h1>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet, consectetur adiping elit, sed do
                  eiusmod tempor incidd ut labore rhei et dolore magna aliqua.
                  Ut enim ad veniam, quis laboris nisi ut aliquip ex ea commodo.
                  Duis aute irure dolor in repre voluptate in the velit esse.
                </p>
              </div>
            </div>
            <div className={styles.div8}>
              <div className={styles.div9}>
                <div className={styles.testimonialMarkers}>
                  <div className={styles.div10}></div>
                </div>
                <p className={styles.duisAuteIrure4}>
                  Duis aute irure dolor in reprehenderit in the voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Cupidatat non
                  proident.
                </p>
              </div>
              <div className={styles.div11}>
                <div className={styles.wrapper}>
                  <div className={styles.div12}></div>
                </div>
                <p className={styles.duisAuteIrure5}>
                  Duis aute irure dolor in reprehenderit in the voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Cupidatat non
                  proident.
                </p>
              </div>
              <div className={styles.div13}>
                <div className={styles.container}>
                  <div className={styles.div14}></div>
                </div>
                <p className={styles.duisAuteIrure6}>
                  Duis aute irure dolor in reprehenderit in the voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Cupidatat non
                  proident.
                </p>
              </div>
              <div className={styles.divChild} />
            </div>
          </div>
        </div>
        <div className={styles.wrapperAb2jpg}>
          <img
            className={styles.ab2jpgIcon}
            loading="lazy"
            alt=""
            src="/ab2jpg@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
