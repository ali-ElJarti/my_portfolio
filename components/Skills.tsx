import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        {/* Industrial Project Management */}
        <SkillsInput title="Lean Manufacturing (Kaizen, Ishikawa, Pareto, PDCA, DMAIC)" link="https://gembaacademy.com/" />
        <SkillsInput title="5S Methodology" link="https://en.wikipedia.org/wiki/5S_(methodology)" />
        <SkillsInput title="Lean Six Sigma" link="https://leansixsigmadefinition.com/" />
        <SkillsInput title="Design Thinking" link="https://designthinking.ideo.com/" />
        <SkillsInput title="Lean Startup" link="https://leanstartup.com/" />
        <SkillsInput title="BPMN" link="https://www.bpmn.org/" />
        <SkillsInput title="Scrum" link="https://www.scrum.org/" />

        {/* IoT */}
        <SkillsInput title="OPC-UA" link="https://opcfoundation.org/" />
        <SkillsInput title="MQTT" link="https://mqtt.org/" />
        <SkillsInput title="ModBus" link="https://modbus.org/" />
        <SkillsInput title="CAN" link="https://www.csselectronics.com/pages/can-bus" />
        <SkillsInput title="TCP/IP" link="https://en.wikipedia.org/wiki/Internet_protocol_suite" />
        <SkillsInput title="Node-RED" link="https://nodered.org/" />
        <SkillsInput title="Serial/Parallel Communication" link="https://en.wikipedia.org/wiki/Serial_communication" />
        <SkillsInput title="Embedded IoT" link="https://en.wikipedia.org/wiki/Internet_of_things" />
        <SkillsInput title="MES/SCADA Integration" link="https://scadafence.com/" />
        <SkillsInput title="IoT Analytics" link="https://aws.amazon.com/iot-analytics/" />
        <SkillsInput title="IoT Security" link="https://www.iotsecurityfoundation.org/" />
        <SkillsInput title="Arduino" link="https://www.arduino.cc/" />
        <SkillsInput title="ESP32" link="https://www.espressif.com/en/products/socs/esp32" />

        {/* Hardware Engineering */}
        <SkillsInput title="Circuit Design (KiCad)" link="https://kicad.org/" />
        <SkillsInput title="FPGA/Verilog (Intel Quartus)" link="https://www.intel.com/content/www/us/en/software/programmable/quartus-prime/overview.html" />
        <SkillsInput title="Simulation (ModelSim, MATLAB/Simulink)" link="https://www.mathworks.com/products/simulink.html" />
        <SkillsInput title="RTOS (Real-Time Operating Systems)" link="https://en.wikipedia.org/wiki/Real-time_operating_system" />
        <SkillsInput title="Microcontroller Programming (Arduino, PIC, ESP32)" link="https://www.microchip.com/" />
        <SkillsInput title="Communication Protocols" link="https://en.wikipedia.org/wiki/Communication_protocol" />

        {/* Industrial Automation/Supervision */}
        <SkillsInput title="OSIsoft PI System" link="https://www.osisoft.com/" />
        <SkillsInput title="KepServerEx" link="https://www.kepware.com/en-us/products/kepserverex/" />
        <SkillsInput title="TiaPortal" link="https://new.siemens.com/global/en/products/automation/industry-software/automation-software/tia-portal.html" />
        <SkillsInput title="Unity Pro" link="https://unity.com/" />
        <SkillsInput title="UA-Expert" link="https://www.unified-automation.com/products/development-tools/uaexpert.html" />
        <SkillsInput title="Vijeo Designer" link="https://www.se.com/" />

        {/* Prototyping/Simulation */}
        <SkillsInput title="Quartus/VHDL" link="https://www.intel.com/content/www/us/en/software/programmable/quartus-prime/overview.html" />
        <SkillsInput title="Aspen Plus" link="https://www.aspentech.com/en/products/engineering/aspen-plus" />
        <SkillsInput title="MATLAB/Simulink" link="https://www.mathworks.com/products/simulink.html" />
        <SkillsInput title="SolidWorks" link="https://www.solidworks.com/" />
        <SkillsInput title="Factory IO" link="https://factoryio.com/" />
        <SkillsInput title="MPLAB" link="https://www.microchip.com/mplab" />
        <SkillsInput title="Unity" link="https://unity.com/" />
        <SkillsInput title="Blender" link="https://www.blender.org/" />
        <SkillsInput title="Cisco Packet Tracer" link="https://www.netacad.com/courses/packet-tracer" />

        {/* Dashboarding */}
        <SkillsInput title="Grafana" link="https://grafana.com/" />
        <SkillsInput title="Power BI" link="https://powerbi.microsoft.com/" />
        <SkillsInput title="Qlik Sense" link="https://www.qlik.com/us/products/qlik-sense" />
        <SkillsInput title="Excel" link="https://www.microsoft.com/en-us/microsoft-365/excel" />

        {/* Programming */}
        <SkillsInput title="C" link="https://en.wikipedia.org/wiki/C_(programming_language)" />
        <SkillsInput title="Python" link="https://www.python.org/" />
        <SkillsInput title="Django" link="https://www.djangoproject.com/" />
        <SkillsInput title="Flask" link="https://flask.palletsprojects.com/" />
        <SkillsInput title="Scikit-learn" link="https://scikit-learn.org/" />
        <SkillsInput title="PyTorch" link="https://pytorch.org/" />
        <SkillsInput title="TensorFlow" link="https://www.tensorflow.org/" />
        <SkillsInput title="Selenium" link="https://www.selenium.dev/" />
        <SkillsInput title="BeautifulSoup" link="https://www.crummy.com/software/BeautifulSoup/" />
        <SkillsInput title="Tkinter" link="https://docs.python.org/3/library/tkinter.html" />
        <SkillsInput title="PyQt/PySide" link="https://riverbankcomputing.com/software/pyqt/intro" />
        <SkillsInput title="SQL" link="https://www.mysql.com/" />
        <SkillsInput title="Java" link="https://www.java.com/" />
        <SkillsInput title="JavaScript (React)" link="https://reactjs.org/" />
        <SkillsInput title="HTML" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML" />
        <SkillsInput title="CSS" link="https://developer.mozilla.org/en-US/docs/Web/CSS" />

        {/* Data Science and Machine Learning */}
        <SkillsInput title="Keras" link="https://keras.io/" />
        <SkillsInput title="RoboFlow" link="https://roboflow.com/" />
      </div>
    </div>
  );
};



export default Skills;
