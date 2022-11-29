import * as React from "react";
const SvgSnapchat = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.9132 17.4571C23.7478 17.0035 23.4291 16.7584 23.0675 16.5623C23.0001 16.5255 22.9388 16.4887 22.8836 16.4642C22.7733 16.4091 22.663 16.3539 22.5527 16.2988C21.425 15.6982 20.5425 14.9505 19.9358 14.0557C19.7642 13.8044 19.611 13.5348 19.4884 13.259C19.4332 13.1119 19.4394 13.0261 19.4761 12.9464C19.5129 12.8851 19.5619 12.8361 19.6232 12.7932C19.8193 12.6645 20.0155 12.5358 20.1503 12.45C20.3893 12.2907 20.5854 12.1681 20.708 12.0823C21.1676 11.7575 21.4924 11.4143 21.6947 11.0282C21.9827 10.4889 22.0195 9.85761 21.7989 9.28765C21.4924 8.47868 20.7325 7.98226 19.8071 7.98226C19.611 7.98226 19.421 8.00065 19.2249 8.04355C19.1758 8.0558 19.1207 8.06806 19.0716 8.08032C19.0778 7.52874 19.0655 6.94653 19.0165 6.37044C18.8449 4.35413 18.134 3.30002 17.3985 2.4604C16.9266 1.93334 16.3751 1.48596 15.7561 1.13663C14.6407 0.499254 13.3721 0.174438 11.9931 0.174438C10.6142 0.174438 9.35171 0.499254 8.2363 1.13663C7.61732 1.48596 7.06574 1.93334 6.59384 2.4604C5.85841 3.30002 5.15363 4.36026 4.9759 6.37044C4.92687 6.94653 4.91461 7.52874 4.92074 8.08032C4.87171 8.06806 4.82268 8.0558 4.76752 8.04355C4.57754 8.00065 4.38142 7.98226 4.19144 7.98226C3.26602 7.98226 2.50607 8.4848 2.19965 9.28765C1.97902 9.85761 2.01579 10.4889 2.30383 11.0282C2.50607 11.4143 2.83089 11.7575 3.29053 12.0823C3.41311 12.1681 3.60309 12.2907 3.84824 12.45C3.97694 12.5358 4.16692 12.6584 4.35691 12.7809C4.42432 12.8238 4.47948 12.879 4.52238 12.9464C4.55915 13.0261 4.56528 13.1119 4.50399 13.2712C4.38142 13.5409 4.23434 13.8044 4.06274 14.0496C3.46826 14.9198 2.61026 15.6614 1.51937 16.2559C0.943285 16.5623 0.342683 16.7645 0.085282 17.4571C-0.104704 17.978 0.0178675 18.5663 0.502026 19.0689C0.679755 19.2527 0.888127 19.4121 1.11489 19.5347C1.58679 19.7921 2.08933 19.9943 2.61639 20.1353C2.7267 20.1659 2.82476 20.2088 2.91669 20.2701C3.09442 20.4233 3.0699 20.6562 3.30279 20.9994C3.41923 21.1771 3.57245 21.3303 3.74405 21.4529C4.24047 21.7961 4.79817 21.8145 5.38651 21.839C5.9197 21.8574 6.5203 21.8819 7.21283 22.1087C7.50087 22.2006 7.79505 22.3844 8.13825 22.5989C8.96561 23.1076 10.0933 23.8001 11.987 23.8001C13.8807 23.8001 15.0145 23.1015 15.848 22.5928C16.1912 22.3844 16.4854 22.2006 16.7612 22.1087C17.4476 21.8819 18.0543 21.8574 18.5875 21.839C19.1758 21.8145 19.7335 21.7961 20.23 21.4529C20.4383 21.3058 20.6099 21.122 20.7325 20.9013C20.9041 20.6133 20.898 20.411 21.0573 20.2701C21.1431 20.2088 21.2412 20.1659 21.3392 20.1414C21.8663 20.0004 22.3811 19.7982 22.8591 19.5347C23.0981 19.406 23.3188 19.2344 23.5026 19.0321L23.5087 19.026C23.9868 18.5357 24.1032 17.9596 23.9132 17.4571ZM22.234 18.358C21.2105 18.9218 20.5241 18.8605 19.9971 19.2037C19.5436 19.4917 19.8132 20.1169 19.4884 20.3436C19.0839 20.6194 17.895 20.3252 16.3628 20.8339C15.0942 21.2507 14.2914 22.458 12.0115 22.458C9.73168 22.458 8.94722 21.2568 7.66022 20.8339C6.12807 20.3252 4.93912 20.6255 4.53464 20.3436C4.20982 20.1169 4.47335 19.4917 4.02596 19.2037C3.49278 18.8605 2.8125 18.9218 1.78903 18.358C1.13327 17.9964 1.50711 17.7757 1.72162 17.6716C5.43554 15.8759 6.03001 13.0996 6.05453 12.8913C6.08517 12.64 6.12194 12.4439 5.84616 12.1926C5.58263 11.9475 4.40594 11.2182 4.07499 10.9914C3.53568 10.6114 3.29666 10.2376 3.47439 9.77181C3.59696 9.45312 3.89726 9.33055 4.20982 9.33055C4.30788 9.33055 4.40594 9.34281 4.50399 9.36119C5.09847 9.48989 5.67456 9.78407 6.0055 9.86987C6.0484 9.88212 6.08517 9.88825 6.12807 9.88825C6.3058 9.88825 6.36709 9.79632 6.35483 9.59408C6.31806 8.94445 6.22613 7.68196 6.33031 6.49914C6.47127 4.87507 6.9922 4.06609 7.61732 3.35518C7.91762 3.01197 9.32106 1.52886 12.0115 1.52886C14.702 1.52886 16.1054 3.00585 16.4057 3.34905C17.0308 4.05996 17.5518 4.86894 17.6927 6.49301C17.7969 7.67583 17.705 8.93832 17.6621 9.58795C17.6498 9.80245 17.7111 9.88212 17.8888 9.88212C17.9317 9.88212 17.9685 9.87599 18.0114 9.86374C18.3423 9.78406 18.9184 9.48376 19.5129 9.35506C19.611 9.33055 19.709 9.32442 19.8071 9.32442C20.1196 9.32442 20.4199 9.44699 20.5425 9.76568C20.7202 10.2315 20.4812 10.6053 19.9419 10.9853C19.6171 11.212 18.4404 11.9413 18.1707 12.1865C17.895 12.4377 17.9317 12.6339 17.9624 12.8851C17.9869 13.0935 18.5814 15.8698 22.2953 17.6654C22.5159 17.7696 22.8836 17.9964 22.234 18.358Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSnapchat;
