import React from "react";
import reviewsData from "../../data/reviewsData";
import useActive from "../../hooks/useActive";
import ProductReviews from "./ProductReviews";

const ProductSummary = (props) => {
  const {
    brand,
    title,
    info,
    category,
    type,
    warranty,
    bodyMaterial,
    numberOfJars,
    motor,
    speedSetting,
    blades,
    safetySetting,
    operatingSetting,
    powerConsumption,
    feet,
    lockingSystem,
    origin,
    speedcontrol,
    armaturematerial,
    design,
    juicertype,
    juicingcapacity,
    voltage,
    frequency,
    rpm,
    productModel,
    jarCapacity,
    model,
    screenSize,
    displayType,
    resolution,
    viewingAngle,
    colorEnhancer,
    soundOutput,
    soundModes,
    hdmiPorts,
    usbPorts,
    voltageFluctuationProtection,
    productDimensions,
    operating,
    ram,
    rom,
    audioFeatures,
    internetConnectivity,
    inBuiltApps,
    inbuiltContent,
    parentelLock,
    childLock,
    cloudTv,
    hdr,
    windingMaterial,
    operationMode,
    suitableFor,
    intendeduse,
    additionalFeatures,
    handle,
    incherSwitch,
    productWeight,
    packageContents,
    certification,
    powerOutput,
    controlPanel,
    display,
    overheatProtection,
    tempratureControl,
    easeOfMaintainence,
    solePlateMaterial,
    swivelCord,
    antiBactarialCoating,
    multiOptionDial,
    powerOnIndicator,
    cordOrganiser,
    soleplateFeatures,
    description,
    descriptionHeading,
    descriptionList,
    descriptionPara,
  } = props;

  const { active, handleActive, activeClass } = useActive("specs");

  return (
    <>
      <section id="product_summary" className="section">
        <div className="container">
          {/*===== Product-Summary-Tabs =====*/}
          <div className="prod_summary_tabs">
            <ul className="tabs">
              <li
                className={`tabs_item ${activeClass("specs")}`}
                onClick={() => handleActive("specs")}
              >
                Specifications
              </li>
              <li
                className={`tabs_item ${activeClass("overview")}`}
                onClick={() => handleActive("overview")}
              >
                Overview
              </li>
              
            </ul>
          </div>

          {/*===== Product-Summary-Details =====*/}
          <div className="prod_summary_details">
            {active === "specs" ? (
              <div className="prod_specs">
                <ul>
                  {brand ? (
                    <li>
                      <span>Brand</span>
                      <span>{brand}</span>
                    </li>
                  ) : null}
                  {warranty ? (
                    <li>
                      <span>warranty</span>
                      <span>{warranty}</span>
                    </li>
                  ) : null}

                  {title ? (
                    <li>
                      <span>Model</span>
                      <span>{title}</span>
                    </li>
                  ) : null}
                  {category ? (
                    <li>
                      <span>Generic Name</span>
                      <span>{category}</span>
                    </li>
                  ) : null}
                  {type ? (
                    <li>
                      <span> Type</span>
                      <span>{type}</span>
                    </li>
                  ) : null}

                  {bodyMaterial ? (
                    <li>
                      <span> Body Material</span>
                      <span>{bodyMaterial}</span>
                    </li>
                  ) : null}

                  {numberOfJars ? (
                    <li>
                      <span>Number Of Jars</span>
                      <span>{numberOfJars}</span>
                    </li>
                  ) : null}

                  {motor ? (
                    <li>
                      <span>Motor</span>
                      <span>{motor}</span>
                    </li>
                  ) : null}

                  {speedSetting ? (
                    <li>
                      <span> Speed Settings</span>
                      <span>{speedSetting}</span>
                    </li>
                  ) : null}

                  {blades ? (
                    <li>
                      <span> Blades</span>
                      <span>{blades}</span>
                    </li>
                  ) : null}

                  {safetySetting ? (
                    <li>
                      <span> Saftey Setting</span>
                      <span>{safetySetting}</span>
                    </li>
                  ) : null}

                  {operatingSetting ? (
                    <li>
                      <span> Operating Setting</span>
                      <span>{operatingSetting}</span>
                    </li>
                  ) : null}

                  {powerConsumption ? (
                    <li>
                      <span> Power Consumption</span>
                      <span>{powerConsumption}</span>
                    </li>
                  ) : null}

                  {feet ? (
                    <li>
                      <span>Feet</span>
                      <span>{feet}</span>
                    </li>
                  ) : null}

                  {lockingSystem ? (
                    <li>
                      <span>Locking System</span>
                      <span>{lockingSystem}</span>
                    </li>
                  ) : null}

                  {origin ? (
                    <li>
                      <span> Origin</span>
                      <span>{origin}</span>
                    </li>
                  ) : null}

                  {speedcontrol ? (
                    <li>
                      <span> Speed Control</span>
                      <span>{speedcontrol}</span>
                    </li>
                  ) : null}

                  {armaturematerial ? (
                    <li>
                      <span> Armature Material</span>
                      <span>{armaturematerial}</span>
                    </li>
                  ) : null}

                  {design ? (
                    <li>
                      <span> Design</span>
                      <span>{design}</span>
                    </li>
                  ) : null}

                  {juicertype ? (
                    <li>
                      <span> Juicer Type</span>
                      <span>{juicertype}</span>
                    </li>
                  ) : null}

                  {juicingcapacity ? (
                    <li>
                      <span> Juicer Capacity</span>
                      <span>{juicingcapacity}</span>
                    </li>
                  ) : null}

                  {voltage ? (
                    <li>
                      <span> Voltage</span>
                      <span>{voltage}</span>
                    </li>
                  ) : null}

                  {frequency ? (
                    <li>
                      <span> Frequency</span>
                      <span>{frequency}</span>
                    </li>
                  ) : null}

                  {rpm ? (
                    <li>
                      <span> RPM</span>
                      <span>{rpm}</span>
                    </li>
                  ) : null}

                  {productModel ? (
                    <li>
                      <span> Product Model</span>
                      <span>{productModel}</span>
                    </li>
                  ) : null}

                  {jarCapacity ? (
                    <li>
                      <span> Jar Capacity</span>
                      <span>{jarCapacity}</span>
                    </li>
                  ) : null}

                  {model ? (
                    <li>
                      <span> Model</span>
                      <span>{model}</span>
                    </li>
                  ) : null}

                  {screenSize ? (
                    <li>
                      <span> Screen Size</span>
                      <span>{screenSize}</span>
                    </li>
                  ) : null}

                  {displayType ? (
                    <li>
                      <span> Display Type</span>
                      <span>{displayType}</span>
                    </li>
                  ) : null}

                  {resolution ? (
                    <li>
                      <span> Resolution</span>
                      <span>{resolution}</span>
                    </li>
                  ) : null}

                  {viewingAngle ? (
                    <li>
                      <span> Viewing Angle</span>
                      <span>{viewingAngle}</span>
                    </li>
                  ) : null}

                  {colorEnhancer ? (
                    <li>
                      <span> Color Enhancer</span>
                      <span>{colorEnhancer}</span>
                    </li>
                  ) : null}

                  {soundOutput ? (
                    <li>
                      <span> Sound Output</span>
                      <span>{soundOutput}</span>
                    </li>
                  ) : null}

                  {soundModes ? (
                    <li>
                      <span> Sound Modes</span>
                      <span>{soundModes}</span>
                    </li>
                  ) : null}

                  {hdmiPorts ? (
                    <li>
                      <span> HDMI Ports</span>
                      <span>{hdmiPorts}</span>
                    </li>
                  ) : null}

                  {usbPorts ? (
                    <li>
                      <span> USB Ports</span>
                      <span>{usbPorts}</span>
                    </li>
                  ) : null}

                  {voltageFluctuationProtection ? (
                    <li>
                      <span> Voltage Fluctuation Protection</span>
                      <span>{voltageFluctuationProtection}</span>
                    </li>
                  ) : null}

                  {productDimensions ? (
                    <li>
                      <span> Dimension</span>
                      <span>{productDimensions}</span>
                    </li>
                  ) : null}

                  {ram ? (
                    <li>
                      <span>RAM</span>
                      <span>{ram}</span>
                    </li>
                  ) : null}

                  {rom ? (
                    <li>
                      <span> ROM</span>
                      <span>{rom}</span>
                    </li>
                  ) : null}

                  {audioFeatures ? (
                    <li>
                      <span> Audio Features</span>
                      <span>{audioFeatures}</span>
                    </li>
                  ) : null}

                  {internetConnectivity ? (
                    <li>
                      <span> Internet Connectivity</span>
                      <span>{internetConnectivity}</span>
                    </li>
                  ) : null}

                  {inBuiltApps ? (
                    <li>
                      <span>In-Built Apps</span>
                      <span>{inBuiltApps}</span>
                    </li>
                  ) : null}

                  {inbuiltContent ? (
                    <li>
                      <span>In-Built Content</span>
                      <span>{inbuiltContent}</span>
                    </li>
                  ) : null}

                  {parentelLock ? (
                    <li>
                      <span> Parentel Lock</span>
                      <span>{parentelLock}</span>
                    </li>
                  ) : null}

                  {childLock ? (
                    <li>
                      <span> Child Lock </span>
                      <span>{childLock}</span>
                    </li>
                  ) : null}

                  {cloudTv ? (
                    <li>
                      <span> Cloud TV </span>
                      <span>{cloudTv}</span>
                    </li>
                  ) : null}

                  {hdr ? (
                    <li>
                      <span> HDR </span>
                      <span>{hdr}</span>
                    </li>
                  ) : null}

                  {windingMaterial ? (
                    <li>
                      <span> Winding Material </span>
                      <span>{windingMaterial}</span>
                    </li>
                  ) : null}

                  {operationMode ? (
                    <li>
                      <span> Operation Mode </span>
                      <span>{operationMode}</span>
                    </li>
                  ) : null}

                  {suitableFor ? (
                    <li>
                      <span> Suitable For</span>
                      <span>{suitableFor}</span>
                    </li>
                  ) : null}

                  {intendeduse ? (
                    <li>
                      <span> Intended Use </span>
                      <span>{intendeduse}</span>
                    </li>
                  ) : null}

                  {additionalFeatures ? (
                    <li>
                      <span> Additional Features </span>
                      <span>{additionalFeatures}</span>
                    </li>
                  ) : null}

                  {handle ? (
                    <li>
                      <span> Handle </span>
                      <span>{handle}</span>
                    </li>
                  ) : null}

                  {incherSwitch ? (
                    <li>
                      <span> Incher Switch </span>
                      <span>{incherSwitch}</span>
                    </li>
                  ) : null}

                  {productWeight ? (
                    <li>
                      <span> Product Weight </span>
                      <span>{productWeight}</span>
                    </li>
                  ) : null}

                  {packageContents ? (
                    <li>
                      <span> Package Contents </span>
                      <span>{packageContents}</span>
                    </li>
                  ) : null}

                  {certification ? (
                    <li>
                      <span> Package Contents </span>
                      <span>{certification}</span>
                    </li>
                  ) : null}

                  {powerOutput ? (
                    <li>
                      <span> Power Output </span>
                      <span>{powerOutput}</span>
                    </li>
                  ) : null}

                  {controlPanel ? (
                    <li>
                      <span> Control Pandel </span>
                      <span>{controlPanel}</span>
                    </li>
                  ) : null}

                  {display ? (
                    <li>
                      <span> Display </span>
                      <span>{display}</span>
                    </li>
                  ) : null}

                  {overheatProtection ? (
                    <li>
                      <span> Over Heat Protection </span>
                      <span>{overheatProtection}</span>
                    </li>
                  ) : null}
                  {tempratureControl ? (
                    <li>
                      <span> Temperature </span>
                      <span>{tempratureControl}</span>
                    </li>
                  ) : null}
                  {easeOfMaintainence ? (
                    <li>
                      <span> Ease Of Maintainence </span>
                      <span>{easeOfMaintainence}</span>
                    </li>
                  ) : null}
                  {solePlateMaterial ? (
                    <li>
                      <span> Sole Plate Material </span>
                      <span>{solePlateMaterial}</span>
                    </li>
                  ) : null}

                  {swivelCord ? (
                    <li>
                      <span> Swivel Cord </span>
                      <span>{swivelCord}</span>
                    </li>
                  ) : null}

                  {antiBactarialCoating ? (
                    <li>
                      <span> Anti-Bactarial Coating </span>
                      <span>{antiBactarialCoating}</span>
                    </li>
                  ) : null}

                  {multiOptionDial ? (
                    <li>
                      <span> Multi-Optional Dial </span>
                      <span>{multiOptionDial}</span>
                    </li>
                  ) : null}

                  {powerOnIndicator ? (
                    <li>
                      <span> Power On Indicator </span>
                      <span>{powerOnIndicator}</span>
                    </li>
                  ) : null}
                  {cordOrganiser ? (
                    <li>
                      <span> Cord Organiser </span>
                      <span>{cordOrganiser}</span>
                    </li>
                  ) : null}
                  {soleplateFeatures ? (
                    <li>
                      <span> Sole Plate Features </span>
                      <span>{soleplateFeatures}</span>
                    </li>
                  ) : null}

                  {operating ? (
                    <li>
                      <span>Operating System</span>
                      <span>{operating}</span>
                    </li>
                  ) : null}

                  
                </ul>
              </div>
            ) : active === "overview" ? (
              <div className="prod_overview">
                
                <ul>
                  <li>{description}</li>
                </ul>
                
              </div>
            ) : (
              <div className="prod_reviews">
                
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSummary;
