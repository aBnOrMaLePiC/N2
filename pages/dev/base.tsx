import {
  BButton,
  BIcon,
  BText,
  BHeading,
  BSpinner,
  BLink,
  BTab,
  BLabel,
  BInput,
  BTextarea,
  BSelect,
  BCheckbox,
  BRadio,
  BSwitch,
  BSearch,
  BQuantity,
  BAlert,
  BTable,
  BThead,
  BTbody,
  BTr,
  BTh,
  BTd,
  BModal,
  BPagination,
  BFile,
  BSlider,
} from "@/base/components"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { useState } from "react"

interface iconPropType {
  type: IconProp,
  class?: string,
}

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset   sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const headingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"]

const sliderImages = [
  "https://dummyimage.com/300.png/09f/fff",
  "https://dummyimage.com/300.png/09f/fff",
  "https://dummyimage.com/300.png/09f/fff",
  "https://dummyimage.com/300.png/09f/fff",
  "https://dummyimage.com/300.png/09f/fff",
]

const alertsTypes = [
  { type: "info", content: "A dummy message." },
  { type: "warning", content: "A dummy message.", clickType: "close" },
  { type: "notice", content: "A dummy message.", clickType: "link" },
  { type: "success", content: "A dummy message.", clickType: "close" },
  {
    content: lorem,
    clickType: "close"
  },
]

const tagInitial = [
  { info: { id: "1" }, name: "Long Long Long Tag" },
  { info: { id: "2" }, name: "tag2" },
  { info: { id: "3" }, name: "tag3" },
  { info: { id: "4" }, name: "tag4" },
  { info: { id: "5" }, name: "tag5" },
  { info: { id: "6" }, name: "tag6" },
]

type tagType = {
  info: {
    id: string,
  },
  name: string,
}

const buttonTypes = [
  "default", "default-sec", "accent", "accent-sec", "link", "link-sec",
  "basic", "basic-sec", "ghost", "ghost-sec", "transparent"
]

const tabList = [
  { tabName: "Tab 1", icon: <BIcon icon={["fas", "gear"]} matchHeight={true} /> },
  { tabName: "Tab 2", icon: <BIcon icon={["fas", "caret-down"]} matchHeight={true} /> },
  { tabName: "Tab 3" },
  { tabName: "no icon" },
  { tabName: "Tab 5", icon: <BIcon icon={["fas", "circle-info"]} matchHeight={true} /> },
]

const labelTypes = [
  { value: "公開中", type: "warning-dark" },
  { value: "公開中", type: "warning" },
  { value: "保存済", type: "success-dark" },
  { value: "保存済", type: "success" },
  { value: "Beta版", type: "info" },
  { value: "未保存", type: "notice" },
  { value: "必須", type: "danger" },
  { value: "お知らせ" },
]

const selectList = [
  { value: 1, text: "Option 1" },
  { value: 2, text: "Option 2" },
  { value: 3, text: "Option 3" },
  { value: 4, text: "Option 4" },
  { value: 5, text: "Option 5" },
]

const inputList = ["Edge", "Firefox", "Chrome", "Opera", "Safari", "Chromium"]

const iconTypes: Array<iconPropType> = [
  // solid icons
  { type: ["fas", "arrow-left"], class: "text-primary-500" },
  { type: ["fas", "arrow-right"], class: "text-primary-500" },
  { type: ["fas", "arrow-up"], class: "text-primary-500" },
  { type: ["fas", "arrow-down"], class: "text-primary-500" },
  { type: ["fas", "caret-left"], class: "text-primary-500" },
  { type: ["fas", "caret-right"], class: "text-primary-500" },
  { type: ["fas", "caret-up"], class: "text-primary-500" },
  { type: ["fas", "caret-down"], class: "text-primary-500" },
  { type: ["fas", "chevron-left"], class: "text-primary-500" },
  { type: ["fas", "chevron-right"], class: "text-primary-500" },
  { type: ["fas", "chevron-up"], class: "text-primary-500" },
  { type: ["fas", "chevron-down"], class: "text-primary-500" },
  { type: ["fas", "circle-question"], class: "p-2 bg-primary-500 text-bgray-100" },
  { type: ["fas", "cart-shopping"], class: "p-2 bg-primary-500 text-bgray-100" },
  { type: ["fas", "magnifying-glass"], class: "p-2 bg-primary-500 text-bgray-100" },
  { type: ["fas", "laptop"], class: "text-primary-500" },
  { type: ["fas", "desktop"], class: "text-primary-500" },
  { type: ["fas", "list"], class: "text-primary-500" },
  { type: ["fas", "robot"], class: "text-primary-500" },
  { type: ["fas", "chart-line"], class: "text-primary-500" },
  { type: ["fas", "paint-brush"], class: "text-primary-500" },
  { type: ["fas", "check"], class: "text-primary-500" },
  { type: ["fas", "check-square"], class: "text-primary-500" },
  { type: ["fas", "pencil"], class: "text-primary-500" },
  { type: ["fas", "house-chimney"], class: "text-primary-500" },
  { type: ["fas", "check-circle"], class: "text-primary-500" },
  { type: ["fas", "exclamation-circle"], class: "text-primary-500" },
  { type: ["fas", "exclamation-triangle"], class: "text-primary-500" },
  { type: ["fas", "magnifying-glass-plus"], class: "text-primary-500" },
  { type: ["fas", "magnifying-glass-minus"], class: "text-primary-500" },
  { type: ["fas", "maximize"], class: "text-primary-500" },
  { type: ["fas", "circle-up"], class: "text-primary-500" },
  { type: ["fas", "circle-user"], class: "text-primary-500" },
  { type: ["fas", "user"], class: "text-primary-500" },
  { type: ["fas", "right-from-bracket"], class: "text-primary-500" },
  { type: ["fas", "arrow-right-from-bracket"], class: "text-primary-500" },
  { type: ["fas", "reply"], class: "text-primary-500" },
  { type: ["fas", "share"], class: "text-primary-500" },
  { type: ["fas", "xmark"], class: "text-primary-500" },
  { type: ["fas", "gear"], class: "text-primary-500" },
  { type: ["fas", "eye"], class: "text-primary-500" },
  { type: ["fas", "upload"], class: "text-primary-500" },
  { type: ["fas", "circle-info"], class: "text-primary-500" },
  { type: ["fas", "minus"], class: "text-primary-500" },
  { type: ["fas", "plus"], class: "text-primary-500" },
  { type: ["fas", "up-right-from-square"], class: "text-primary-500" },
  { type: ["fas", "right-left"], class: "text-primary-500" },
  { type: ["fas", "lightbulb"], class: "text-primary-500" },
  { type: ["fas", "cloud"], class: "text-primary-500" },
  { type: ["fas", "link"], class: "text-primary-500" },
  { type: ["fas", "bars"], class: "text-primary-500" },
  { type: ["fas", "message"], class: "text-primary-500" },
  { type: ["fas", "share-nodes"], class: "text-primary-500" },
  { type: ["fas", "refresh"], class: "text-primary-500" },
  { type: ["fas", "circle-plus"], class: "text-primary-500" },
  { type: ["fas", "file-import"], class: "text-primary-500" },
  { type: ["fas", "envelope"], class: "text-primary-500" },
  { type: ["fas", "language"], class: "text-primary-500" },

  // regular icons
  { type: ["far", "circle-question"], class: "text-primary-500" },
  { type: ["far", "trash-can"], class: "text-primary-500" },
  { type: ["far", "star"], class: "text-primary-500" },
  { type: ["far", "rectangle-list"], class: "text-primary-500" },
  { type: ["far", "calendar"], class: "text-primary-500" },
  { type: ["far", "image"], class: "text-primary-500" },
  { type: ["far", "square-plus"], class: "text-primary-500" },
  { type: ["far", "file-image"], class: "text-primary-500" },
  { type: ["far", "folder"], class: "text-primary-500" },
]

const Base = () => {
  const [activeTab, setActiveTab] = useState<Number>(0)
  const [error, setError] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [tableBorder, setTableBorder] = useState<boolean>(false)
  const [darkBg, setDarkBg] = useState<boolean>(true)
  const [verticalTable, setVerticalTable] = useState<boolean>(false)
  const [radio, setRadio] = useState<string>("default")
  const [search, setSearch] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(0)
  const [pagination, setPagination] = useState<number>(1) // starts from 1
  const [tarea, setTarea] = useState<string>("")
  const [tarea2, setTarea2] = useState<string>("")
  const [tareaFocus, setTareaFocus] = useState<boolean>(false)
  const [alertTypes, setAlertTypes] = useState(alertsTypes)
  const [alert, setAlert] = useState<boolean>(false)
  const [alertN, setAlertN] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const [select, setSelect] = useState<string>("")
  const [input, setInput] = useState<string>("")
  const [sliderIndex, setSliderIndex] = useState<number>(0)

  const alertClickHandler = (clickType: string | undefined, index: number) => {
    if (clickType && clickType === "close") {
      setAlertTypes(alertTypes.filter((_, i) => { return index !== i }))
    } else {
      window.alert("Dummy.")
    }
  }

  const sliderClickHandler = () => {
    window.alert(`Slider is clicked.\nCurrent index is = ${sliderIndex}`)
  }

  return (
    <div className="bg-bgray-200 min-h-screen h-full w-full">

      <BModal
        showModal={modal}
        setShowModal={setModal}
        closeBtn={true}
        width="xl" // sm | md | lg | xl | custom: w-96
        header="This is the header"
        buttons={[
          { category: "primary-sec", name: "閉じる" },
          { category: "accent", name: "削除する", onClick: () => setModal(false) },
          { category: "primary", name: "削除する", onClick: () => setModal(false) }
        ]}
        buttonPosition="justify-between" // not adding attribute or default: justify-center
      >
        <div className="px-5">
          {lorem.repeat(100)}
        </div>
      </BModal>

      <div className="w-4/5 bg-bgray-100 border m-auto mb-5">
        <BHeading element="h1" className="bg-gradient-to-r from-bgray-400 via-bgray-600 to-bgray-400 text-bgray-100 text-center">Base UI/Kit</BHeading>

        {/* ----------Start::Slider---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Slider</BHeading>

          <div className="flex flex-col justify-center items-center">
            <div className="border border-primary-500">
              <BSlider
                width="w-96"
                height="h-96"
                imageSrcList={sliderImages}
                sliderTimeInterval={2000} // default: 0 (no timer), in milli-seconds
                onClick={sliderClickHandler}
                setCurrentIndex={setSliderIndex}
              />
            </div>
            <BText className="!block mt-4">{sliderIndex + 1}/{sliderImages.length}</BText>
          </div>
        </div>
        {/* ----------End::Slider---------- */}

        {/* ----------Start::Headings---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Headings</BHeading>

          {headingTypes.map((type, index) => {
            return (
              <div key={index} className="flex items-center px-4">

                <span className="w-1/6 inline">
                  Heading {index + 1}
                </span>

                <BHeading element={type}> The quick brown fox jumps over the lazy dog.</BHeading>
              </div>
            )
          })}
        </div>
        {/* ----------End::Headings---------- */}

        {/* ----------Start::Texts---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Text</BHeading>
          <div className="mt-4">
            <BText
              type="title">
              タイトル &#40;title&#41;
            </BText>
          </div>
          <div className="mt-4">
            <BText
              type="error"
            >
              エラーメッセージエラーメッセージエラーメッセージ
            </BText>
          </div>
          <div className="mt-4">
            <span className="mr-4">Invisible text :</span>
            <BText
              type="error"
              visible={false}
            >
              This should be invisible
            </BText>
          </div>
          <div className="mt-4">
            <BText
              type="error"
              className="w-72 "
            >
              {("エラーメッセージエラーメッセージエラーメッセージ").repeat(3)}
            </BText>
          </div>
          <div className="mt-4">
            <BText
              type="info">
              セントメッセージセントメッセージ
            </BText>
          </div>
          <div className="mt-4">
            <BText>
              A default text デフォルトのテキスト
            </BText>
          </div>
          <div className="mt-4">
            <BText className="font-bold underline italic">
              A default text デフォルトのテキスト
            </BText>
          </div>
        </div>
        {/* ----------End::Texts---------- */}

        {/* ----------Start::Alerts---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Alerts</BHeading>
          <div className="mt-4">
            <BAlert
              className="w-3/4"
              category="modal"
              autoHide={() => setAlert(false)} // this function will run after designated timeout
              autoHideDelay={2500}
              viewAlert={alert}
              type="info"
              clickType="close"
              onClick={() => setAlert(false)}
            >
              category: modal-autohide, type: info, clickType: close
            </BAlert>

            <BAlert
              className="w-3/4"
              category="modal"
              viewAlert={alertN}
              type="warning"
              clickType="close"
              // hideIcon={true} // hides icons
              onClick={() => setAlertN(false)}
            >
              category: modal, type: info, clickType: close
            </BAlert>
            <div>
              <BButton category="primary" onClick={() => setAlert(true)}>
                Show autohide alert
              </BButton>

              <BButton className="ml-4" category="primary" onClick={() => setAlertN(true)}>
                Show normal Alert
              </BButton>

            </div>
            {alertTypes.map((alertType, index) => {
              return <BAlert
                key={index}
                className="w-3/4 mt-4"
                type={alertType.type}
                clickType={alertType.clickType}
                onClick={() => alertClickHandler(alertType.clickType, index)}
              >
                type: {alertType.type || "\"none\""}, clickType: {alertType.clickType || "\"none\""} -&gt; {alertType.content}
              </BAlert>
            })}
          </div>

        </div>
        {/* ----------End::Alerts---------- */}

        {/* ----------Start::Panel---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Modal</BHeading>
          <BButton
            className="ml-4"
            onClick={() => setModal(!modal)}
          >
            Switch Modal
          </BButton>

        </div>
        {/* ----------End::Panel---------- */}

        {/* ----------Start::Radios---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Radio buttons</BHeading>

          <BRadio
            className="mr-4 mt-4"
            id="radioDefault"
            name="btn-handle"
            label="Default"
            hasError={radio === "error"}
            checked={radio === "default"}
            onChange={() => setRadio("default")} />
          <BRadio
            className="mr-4"
            id="radioDisable"
            name="btn-handle"
            label="Disable"
            hasError={radio === "error"}
            checked={radio === "disable"}
            disabled={radio === "disable"}
            onChange={() => setRadio("disable")} />
          <BRadio
            className="mr-4"
            id="radioLoading"
            name="btn-handle"
            label="Loading"
            hasError={radio === "error"}
            checked={radio === "loading"}
            onChange={() => setRadio("loading")} />
          <BRadio
            className="mr-4"
            id="radioError"
            name="btn-handle"
            label="Error"
            hasError={radio === "error"}
            checked={radio === "error"}
            onChange={() => setRadio("error")} />
        </div>
        {/* ----------End::Radios---------- */}

        {/* ----------Start::Buttons---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Buttons</BHeading>

          {/* ----------Start::Default buttons---------- */}
          <BHeading className="mt-4" element="h4">Default buttons</BHeading>

          {/* ----------Start::Buttons default---------- */}
          <div className="rounded bg-orange-200 p-4 mt-4 grid grid-cols-6 gap-2">
            {buttonTypes.map((type, index) => {
              return (
                <BButton key={index} category={type} disabled={radio === "disable"} loading={radio === "loading"}>
                  {type}
                </BButton>
              )
            })}
          </div>
          {/* ----------End::Buttons default---------- */}

          {/* ----------Start::Buttons with icon---------- */}
          <BHeading className="mt-8" element="h4">Buttons with icon</BHeading>
          <div className="flex justify-between">
            <BButton className="mt-4 px-12" category="default-sec">
              <BIcon icon={["fas", "chevron-left"]} className="icon-left-abs" matchHeight={true} />
              Icon Left-abs
            </BButton>
            <BButton className="mt-4" category="default">
              <BIcon icon={["fas", "gear"]} className={"mr-2"} matchHeight={true} />
              Icon Left
            </BButton>
            <BButton className="mt-4" category="primary">
              Icon Right
              <BIcon icon={["fas", "magnifying-glass"]} className={"ml-2"} matchHeight={true} />
            </BButton>
            <BButton className="mt-4 px-12" category="primary">
              <BIcon icon={["fas", "chevron-right"]} className={"icon-right-abs"} matchHeight={true} />
              Icon Right-abs
            </BButton>
            <BButton className="mt-4" category="danger-sec">
              <BIcon icon={["far", "trash-can"]} className={"mr-2"} matchHeight={true} />
              Icon default
            </BButton>
            <BButton className="mt-4 px-12" category="default">
              <BIcon icon={["fas", "right-from-bracket"]} className={"icon-right-abs"} matchHeight={true} />
              Logout
            </BButton>
          </div>
          {/* ----------End::Buttons with icon---------- */}

          {/* ----------Start::Other buttons---------- */}
          <BHeading className="mt-8 flex-auto" element="h4">Buttons Example</BHeading>
          <div className="mt-4">
            <BButton className="w-full px-12 mr-2" category="primary">
              <BIcon icon={["fas", "chevron-right"]} className={"icon-right-abs"} matchHeight={true} />
              Full width Right abs
            </BButton>
            <div className="mt-4">
              <BButton className="w-1/4 px-12 mr-2" category="default">
                <BIcon icon={["fas", "chevron-left"]} className="icon-left-abs" matchHeight={true} />
                Width-1/4 Left-abs
              </BButton>
              <BButton className="icon-right mr-2" category="primary-sec">
                Auto Width icon right
                <BIcon icon={["fas", "magnifying-glass"]} className={"ml-2"} matchHeight={true} />
              </BButton>
              <BButton className="mr-2 px-12" category="default-sec" loading={true} spinner={<BSpinner borderColor="border-primary-500" />}> {/* <- Change this to false */}
                <BIcon icon={["fas", "chevron-left"]} className="icon-left-abs" matchHeight={true} />
                Left-abs
              </BButton>
              <BButton className="mr-2" category="transparent" loading={false} spinner={<BSpinner borderColor="border-bgray-900" width="w-10" height="h-10" />}>
                <div className="bg-bred-600 w-14 h-14 flex items-center justify-center rounded-sm">
                  <BIcon icon={["fas", "circle-info"]} className="text-bred-600 bg-bgray-100 text-[28px] rounded-full border border-bgray-100" matchHeight={true} />
                </div>
              </BButton>
              <BButton className="mr-2" category="transparent" loading={false} spinner={<BSpinner borderColor="border-bgray-900" width="w-10" height="h-10" />}>
                <div className="bg-bred-600 w-12 h-12 flex items-center justify-center rounded-sm">
                  <BIcon icon={["fas", "circle-info"]} className="text-bred-600 bg-bgray-100 text-2xl rounded-full border border-bgray-100" matchHeight={true} />
                </div>
              </BButton>
              <BButton className="mr-2" category="transparent" loading={false} spinner={<BSpinner borderColor="border-bgray-900" width="w-10" height="h-10" />}>
                <div className="bg-bred-600 w-10 h-10 flex items-center justify-center rounded-sm">
                  <BIcon icon={["fas", "circle-info"]} className="text-bred-600 bg-bgray-100 text-2xl rounded-full border border-bgray-100" matchHeight={true} />
                </div>
              </BButton>
              <BButton className="mr-2" category="transparent" loading={false} spinner={<BSpinner borderColor="border-bgray-900" width="w-10" height="h-10" />}>
                <div className="bg-bred-600 w-8 h-8 flex items-center justify-center rounded-sm">
                  <BIcon icon={["fas", "circle-info"]} className="text-bred-600 bg-bgray-100 text-base rounded-full border border-bgray-100" matchHeight={true} />
                </div>
              </BButton>
            </div>
          </div>
          {/* ----------End::Other buttons---------- */}

        </div>
        {/* ----------End::Buttons---------- */}

        {/* ----------Start::Links---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Links</BHeading>
          <BHeading element="h5">&#40;BLink&#41;</BHeading>
          <div className="flex items-start mt-4">
            <BLink className="mr-6" href="http://www.google.com" category="blue">
              <BIcon icon={["fas", "magnifying-glass"]} className={"mr-2"} matchHeight={true} />
              <span>Blue with icons</span>
              <BIcon icon={["fas", "chevron-right"]} className={"ml-2"} matchHeight={true} />
            </BLink>
            <BLink className="mr-6" href="http://www.google.com" underline={true} category="gray">Gray underlined</BLink>
            <BLink className="mr-6" href="http://www.google.com" target="_blank" category="transparent">transparent or none</BLink>
            <BLink className="mr-6" href="http://www.google.com" disabled={true} category="blue">Blue disabled</BLink>
            <BLink className="mr-6" href="http://www.google.com" disabled={true} category="gray">Gray disabled</BLink>
            <BLink className="mr-6" href="http://www.google.com" disabled={false}>
              <img alt="dummy" className="object-fill bg-bgray-400" src="https://dummyimage.com/300.png/09f/fff" width={48} height={48} />
              <span>A Transparent LINK with image</span>
            </BLink>
          </div>
        </div>
        {/* ----------End::Links---------- */}

        {/* ----------Start::Tabs---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Tabs</BHeading>
          <BHeading element="h5">&#40;BTab&#41;</BHeading>
          <BTab className="mt-4" tabList={tabList} activeTab={activeTab} setActiveTab={setActiveTab} />
          <BTab className="mt-4" tabList={tabList} activeTab={activeTab} setActiveTab={setActiveTab} fixed={false} tabWidth="w-40" />
          <BTab className="mt-4" tabList={[...tabList, ...tabList, ...tabList]} activeTab={activeTab} setActiveTab={setActiveTab} fixed={false} />
        </div>
        {/* ----------End::Tabs---------- */}

        {/* ----------Start::Labels---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Labels</BHeading>
          <div className="mt-4 flex justify-between">
            {labelTypes.map((label, index) => {
              return (
                <div key={index} className="w-32 py-2 flex flex-col justify-between items-center">
                  <BLabel key={index} value={label.value} type={label.type} />
                  <div className="w-full text-center border-t p-2 mt-4 text-xs">type={label.type || '\"\"'}</div>
                </div>
              )
            })}
          </div>

        </div>
        {/* ----------End::Labels---------- */}

        {/* ----------Start::Form items---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Form items</BHeading>
          <BCheckbox
            className="mr-4 mt-4"
            id="checkError"
            label="Error"
            hasError={error}
            // checked={value}
            disabled={disabled}
            onChange={(e) => setError(e.target.checked)} />
          <BCheckbox
            className="mr-4"
            id="checkDisable"
            label="Disable"
            hasError={error}
            // checked={value}
            onChange={(e) => setDisabled(e.target.checked)} />
          <BRadio
            className="mr-4"
            id="radio"
            name="btn-handle"
            hasError={error}
            // checked={value}
            label="Default"
            disabled={disabled} />
          <BSwitch
            className="mr-4"
            id="switchDisable"
            label="Switch"
            hasError={error}
            // checked={value}
            disabled={disabled}
            onChange={() => { }} />
          <BSwitch
            className="mr-4 align-middle"
            id="BSwitchWithText"
            label="Switch with text" // not necessary to have label when textInside is true
            activeText="Active"
            inactiveText="Inactive"
            hasError={error}
            textInside={true}
            disabled={disabled}
            onChange={() => { }} />
          <div className="mt-4 flex flex-col">
            <div className="mt-4 flex items-center">
              <span className="w-32">BQuantity</span>
              <BQuantity
                className="!w-40 mt-4"
                value={quantity}
                setValue={setQuantity}
                hasError={error}
                disabled={disabled}
                min={0}
                max={100} />
            </div>
            <div className="mt-4 flex items-center">
              <span className="w-32">BFile</span>
              <BFile
                className="w-64"
                disabled={disabled} />
            </div>
            <div className="mt-4 flex items-center">
              <span className="w-32">BSearch</span>
              <BSearch
                className="w-2/5"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                clearHandler={() => setSearch("")}
                onClick={() => { }}
                type="input"
                placeholder="Search something.." />
            </div>
            <div className="mt-4 flex items-center">
              <span className="w-32">BInput</span>
              <BInput
                className="w-2/5"
                inputClassName=""
                // value=""
                onChange={() => { }}
                type="input"
                placeholder="Full Name"
                hasError={error}
                disabled={disabled} />
            </div>
            <div className="mt-4 flex items-center">
              <span className="w-32">BInputWithList</span>
              <BInput
                className="w-2/5"
                inputClassName=""
                value={input}
                listId="list"
                dropdownList={inputList}
                onChange={(e) => setInput(e.target.value)}
                type="input"
                placeholder="Browser name"
                hasError={error}
                disabled={disabled} />
            </div>
            <div className="mt-4 flex items-center">
              <span className="w-32">BInput</span>
              <BInput
                className="w-2/5"
                inputClassName=""
                // value=""
                onChange={() => { }}
                type="input"
                placeholder="Information"
                hasError={error}
                disabled={disabled}
                icon={<BIcon icon={["fas", "circle-info"]} className={"ml-2 text-bgray-400"} matchHeight={true} />} />
            </div>
            <div className="mt-4 flex items-center">
              <span className="w-32">BInput</span>
              <BInput
                className="w-2/5"
                inputClassName=""
                // value=""
                onChange={() => { }}
                type="password"
                placeholder="Password"
                hasError={error}
                disabled={disabled}
                icon={<BIcon icon={["fas", "circle-info"]} className={"ml-2 text-bgray-400"} matchHeight={true} />}
                iconRight={true} />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="w-32">BTextarea</span>
            <BTextarea
              className="w-2/5"
              textareaClassName=""
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
              placeholder="Textarea"
              hasError={error}
              disabled={disabled}
              rows={6}
              maxLength={200}
              counter={true}
            />
          </div>
          <div className="mt-4 flex items-center">
            <span className="w-32">BTextarea Auto Height Adjust</span>
            <label
              className="w-2/5"
              htmlFor="textAreaAutoHeight"
              onClick={() => setTareaFocus(true)}>
              {!tareaFocus && tarea2 ?
                <div className="w-full px-2 py-1 whitespace-pre-wrap border text-bgray-800 border-bblack-30 hover:border-bgray-700">
                  {tarea2}
                </div> :
                <BTextarea
                  id="textAreaAutoHeight"
                  onBlur={() => setTareaFocus(false)}
                  textareaClassName=""
                  value={tarea2}
                  onChange={(e) => setTarea2(e.target.value)}
                  placeholder="Textarea"
                  hasError={error}
                  disabled={disabled}
                  rows={6}
                  maxLength={200}
                  autoHeightAdjust={true}
                />
              }
            </label>
          </div>
          <div className="mt-4 flex items-center">
            <span className="w-32">BSelect</span>
            <BSelect
              className="w-2/5"
              selectClassName=""
              placeholder="Dropdown"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              list={selectList}
              hasError={error}
              disabled={disabled}
            />
          </div>
          <div className="mt-4 flex items-center">
            <span className="w-32">BSelect</span>
            <BSelect
              className="w-2/5"
              selectClassName=""
              placeholder="Dropdown icon"
              noDefaultOption={false} // false: first option will be empty. || true: first option will be from the list
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              icon="&#9432;&#160;"
              list={selectList}
              hasError={error}
              disabled={disabled}
            />
          </div>
        </div>
        {/* ----------End::Form items---------- */}

        {/* ----------Start::Tables---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Table</BHeading>
          <BHeading element="h5">&#40;BTable, BThead, BTbody, BTr, BTh, BTd&#41;</BHeading>
          <BSwitch
            className="mt-4 mr-4"
            id="tableSwitch"
            label="Table Border"
            checked={tableBorder}
            onChange={() => setTableBorder(!tableBorder)} />
          <BSwitch
            className="mt-4 mr-4"
            id="tabledir"
            label="Table direction"
            checked={verticalTable}
            onChange={() => setVerticalTable(!verticalTable)} />
          <BSwitch
            className="mt-4"
            id="darkbg"
            label="th background"
            checked={darkBg}
            onChange={() => setDarkBg(!darkBg)} />

          <div className="mt-4">
            <BText className="text-sm !block" type="info">↓ Pagination starts from 1</BText>
            <div className="text-center">
              <BPagination
                className="mt-4"
                length={200}
                numberOfRows={10}
                currentSelected={pagination}
                clickHandler={setPagination}
                smallerWidth={true}
              />
            </div>
          </div>

          <div className="mt-4">
            <BTable hasBorder={tableBorder} className="w-full">
              {!verticalTable && <BThead>
                <BTr>
                  <BTh className="w-1/12" darkBg={darkBg}>th1</BTh>
                  <BTh className="" darkBg={darkBg}>th1</BTh>
                  <BTh className="w-1/8" darkBg={darkBg}>th1</BTh>
                  <BTh className="w-1/12" darkBg={darkBg}>th1</BTh>
                </BTr>
              </BThead>}
              <BTbody>
                <BTr>
                  {verticalTable && <BTh darkBg={darkBg}>th1</BTh>}
                  <BTd>tr1</BTd>
                  <BTd>tr1</BTd>
                  <BTd>tr1</BTd>
                  <BTd>tr1</BTd>
                </BTr>
                <BTr>
                  {verticalTable && <BTh darkBg={darkBg}>th1</BTh>}
                  <BTd>tr1</BTd>
                  <BTd>tr1</BTd>
                  <BTd>tr1</BTd>
                  <BTd>tr1</BTd>
                </BTr>
                <BTr>
                  {verticalTable && <BTh darkBg={darkBg}>th1</BTh>}
                  <BTd>tr1</BTd>
                  <BTd>tr1</BTd>
                  <BTd>tr1</BTd>
                  <BTd>tr1</BTd>
                </BTr>
              </BTbody>
            </BTable>

            <div className="text-center">
              <BPagination
                className="mt-4"
                length={200}
                numberOfRows={10}
                currentSelected={pagination}
                clickHandler={setPagination}
              />
            </div>
          </div>
        </div>
        {/* ----------End::Tables---------- */}

        {/* ----------Start::Icons---------- */}
        <div className="mt-4 p-4">
          <BHeading element="h2">Icons</BHeading>
          <BHeading element="h5">&#40;BIcon&#41;</BHeading>
          <div className="grid grid-cols-6 gap-2">
            {iconTypes.map((icon, index) => {
              return (
                <div key={index} className="flex flex-col mt-4">
                  <div className="h-20 border bg-bgray-100 text-bgray-900 flex justify-center items-center">
                    <BIcon icon={icon.type} className={icon.class} />
                  </div>
                  <div className="h-12 border text-center text-sm text-bgray-100 bg-bgray-600 p-2 rounded-sm">{JSON.stringify(icon.type)}</div>
                </div>

              )
            })}

            {/* matchHeight={true} will match icon height */}
            <div className="h-32 mt-4 border bg-bgray-100 text-bgray-900 flex justify-center items-center">
              <span className="text-2xl">
                <BIcon icon={["fas", "xmark"]} className={"mr-2 w-4 h-4 p-1 bg-bred-100 text-primary-500 rounded-full border-2 border-bgray-600"} matchHeight={true} />
                <span>Height</span>
              </span>
            </div>
          </div>
        </div>
        {/* ----------End::Icons---------- */}

      </div>
    </div >
  )
}

export default Base