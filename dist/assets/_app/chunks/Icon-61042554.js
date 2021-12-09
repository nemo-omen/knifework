import{L as u,M as l,N as m,S as Z,i as d,s as g,O as c,P as s,a as n,d as r,b as h,f as z,Q as o,R as f}from"./vendor-33a2ae70.js";const p=u({id:"menu",initial:"collapsed",context:{currentMenu:null},states:{collapsed:{on:{CLICK:{actions:l({currentMenu:(e,C)=>e.currentMenu=C==null?void 0:C.key}),target:"expanded"},GO:{actions:l({currentMenu:(e,C)=>e.currentMenu=C==null?void 0:C.key}),target:"collapsed"}}},expanded:{on:{CLICK:[{target:"collapsed",cond:"isCurrent"},{target:"expanded",cond:"isNotCurrent",actions:l({currentMenu:(e,C)=>e.currentMenu=C==null?void 0:C.key})}],GO:{actions:l({currentMenu:(e,C)=>e.currentMenu=C==null?void 0:C.key}),target:"collapsed"}}}}},{guards:{isCurrent:(e,C)=>e.currentMenu===(C==null?void 0:C.key),isNotCurrent:(e,C)=>e.currentMenu!==(C==null?void 0:C.key)}}),x=m(p).start(),_={add:["M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"],add2:["M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"],book:["M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z"],bookmark:["M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"],bookmarkfill:["M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1z"],cart:["M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"],close:["M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"],cup:["M5.17874 5.00232C5.12859 5.00079 5.07838 5.00001 5.02812 5H2.41666C1.90851 5.00057 1.42133 5.20268 1.06201 5.56201C0.702684 5.92133 0.500567 6.40851 0.499996 6.91666C0.499996 6.9802 0.515772 7.04212 0.545155 7.09717C0.515774 7.04212 0.5 6.98021 0.5 6.91667C0.500571 6.40851 0.702688 5.92133 1.06201 5.56201C1.42133 5.20269 1.90851 5.00057 2.41667 5H5.02812C5.07839 5.00002 5.1286 5.00079 5.17874 5.00232ZM0.640389 7.21319C0.666842 7.23486 0.695935 7.25278 0.726831 7.2666C0.775605 7.28841 0.828872 7.3 0.883333 7.3H1.05315C1.22924 7.30003 1.4015 7.34046 1.55733 7.41649C1.65083 7.46211 1.73841 7.52054 1.81736 7.59076M2.19529 8.31583L2.19529 8.31583C2.18076 8.19234 2.14645 8.0731 2.09455 7.96231C2.14645 8.0731 2.18076 8.19234 2.19529 8.31583ZM0.88333 7.585H1.05309C1.26501 7.58505 1.4696 7.66288 1.62795 7.80372C1.78631 7.94457 1.88747 8.13865 1.91224 8.34913L3.12689 18.674C3.19003 19.2096 3.44753 19.7034 3.85056 20.0618C4.25359 20.4202 4.77419 20.6182 5.31351 20.6183H15.6199C16.1592 20.6182 16.6797 20.4202 17.0828 20.0618C17.4858 19.7034 17.7433 19.2095 17.8064 18.6739L18.8404 9.885H19.7638H20.2267L20.3558 10.9178L20.7523 14.0901C20.8196 14.6222 21.0785 15.1115 21.4805 15.4664C21.8826 15.8214 22.4006 16.0176 22.9369 16.0183H23.1167C23.2939 16.0183 23.4639 15.9479 23.5892 15.8226C23.7146 15.6972 23.785 15.5272 23.785 15.35V8.44968C23.7843 7.86604 23.5522 7.3065 23.1395 6.89381C22.7268 6.48112 22.167 6.24899 21.5833 6.24833H10.1549C9.47075 6.248 8.79835 6.06939 8.20417 5.73023L7.6419 5.40894C6.84575 4.9545 5.94484 4.71534 5.02812 4.715H2.41634C1.83271 4.71565 1.27317 4.94779 0.86048 5.36048C0.447789 5.77317 0.215652 6.33303 0.214996 6.91666C0.214996 7.09392 0.28541 7.26391 0.410747 7.38925C0.536084 7.51458 0.706077 7.585 0.88333 7.585ZM2.42558 7.11212C2.42558 7.11212 2.42558 7.11211 2.42557 7.11211C2.26548 6.94784 2.07837 6.81478 1.87385 6.7178C1.78744 6.67683 1.69793 6.64231 1.60603 6.61459C1.5147 6.58704 1.42102 6.56623 1.3257 6.5525C1.3257 6.5525 1.3257 6.5525 1.3257 6.5525C1.51694 6.58004 1.70157 6.63612 1.87385 6.7178M10.155 7.585H17.7649L16.4789 18.5177C16.4541 18.7281 16.3529 18.9222 16.1946 19.063C16.0362 19.2038 15.8317 19.2816 15.6198 19.2817H5.31351C5.10162 19.2816 4.8971 19.2038 4.73876 19.063C4.58041 18.9222 4.47923 18.7281 4.45441 18.5177L3.23973 8.19268C3.18292 7.71062 2.96846 7.26082 2.62968 6.9132C2.38406 6.66117 2.08307 6.47309 1.75302 6.36233C1.79915 6.3072 1.85223 6.2577 1.91124 6.21519C2.05851 6.10912 2.23534 6.05192 2.41683 6.05166H5.02825C5.7125 6.05204 6.38488 6.23069 6.97908 6.56999L7.5412 6.89106C8.33735 7.34546 9.23826 7.58462 10.155 7.585ZM21.4797 9.13377C21.4595 8.97219 21.381 8.82353 21.2589 8.71573C21.1369 8.60792 20.9795 8.5484 20.8167 8.54833H18.9976L19.111 7.585L21.583 7.585C21.8123 7.58531 22.0324 7.67656 22.1946 7.83874C22.3568 8.00096 22.4481 8.22091 22.4483 8.45033V14.5299C22.3983 14.4955 22.3517 14.4558 22.3095 14.4113C22.1827 14.2775 22.1018 14.1064 22.0786 13.9235L21.4797 9.13377ZM16.8247 13.8948L16.8249 13.8929C16.8444 13.7175 16.7937 13.5415 16.6839 13.4033C16.5741 13.2652 16.4141 13.176 16.2388 13.1554C16.0635 13.1348 15.8872 13.1843 15.7483 13.2932C15.6094 13.4021 15.5192 13.5616 15.4975 13.7367L15.0255 17.7483H13.9167C13.7394 17.7483 13.5694 17.8187 13.4441 17.9441C13.3187 18.0694 13.2483 18.2394 13.2483 18.4167C13.2483 18.5939 13.3187 18.7639 13.4441 18.8892C13.5694 19.0146 13.7394 19.085 13.9167 19.085H15.2789C15.5366 19.085 15.7853 18.9904 15.9778 18.8192C16.1703 18.648 16.2933 18.4121 16.3234 18.1562L16.8247 13.8948ZM15.7803 13.7719L15.2789 18.0333H13.9167L15.2789 18.0333L15.7803 13.7719ZM12.8559 17.9441C12.7306 17.8187 12.5606 17.7483 12.3833 17.7483H11.6167C11.4394 17.7483 11.2694 17.8187 11.1441 17.9441C11.0187 18.0694 10.9483 18.2394 10.9483 18.4167C10.9483 18.5939 11.0187 18.7639 11.1441 18.8892C11.2694 19.0146 11.4394 19.085 11.6167 19.085H12.3833C12.5606 19.085 12.7306 19.0146 12.8559 18.8892C12.9813 18.7639 13.0517 18.5939 13.0517 18.4167C13.0517 18.2394 12.9813 18.0694 12.8559 17.9441ZM9.415 9.21666C9.415 9.39391 9.48541 9.56391 9.61075 9.68925C9.73608 9.81458 9.90608 9.885 10.0833 9.885H11.715V10.0817H10.85C10.6727 10.0817 10.5028 10.1521 10.3774 10.2774C10.2521 10.4027 10.1817 10.5727 10.1817 10.75C10.1817 10.9272 10.2521 11.0972 10.3774 11.2226C10.5028 11.3479 10.6727 11.4183 10.85 11.4183H11.715V11.615H10.0833C9.90608 11.615 9.73608 11.6854 9.61075 11.8107C9.48541 11.9361 9.415 12.1061 9.415 12.2833C9.415 12.4606 9.48541 12.6306 9.61075 12.7559C9.73608 12.8813 9.90608 12.9517 10.0833 12.9517H11.715V13.1483H10.85C10.6727 13.1483 10.5028 13.2187 10.3774 13.3441C10.2521 13.4694 10.1817 13.6394 10.1817 13.8167C10.1817 13.9939 10.2521 14.1639 10.3774 14.2892C10.4189 14.3308 10.4654 14.3663 10.5153 14.3952C10.6162 14.4535 10.7315 14.485 10.85 14.485H11.715V14.6817H10.2103H10.0833C9.90608 14.6817 9.73608 14.7521 9.61075 14.8774C9.48541 15.0028 9.415 15.1727 9.415 15.35C9.415 15.3751 9.41641 15.4001 9.4192 15.4248C9.43607 15.5746 9.50318 15.715 9.61075 15.8226C9.73608 15.9479 9.90608 16.0183 10.0833 16.0183H12.3833C12.5606 16.0183 12.7306 15.9479 12.8559 15.8226C12.9813 15.6972 13.0517 15.5272 13.0517 15.35V12.0126V9.21666C13.0517 9.03941 12.9813 8.86942 12.8559 8.74408C12.7306 8.61874 12.5606 8.54833 12.3833 8.54833H10.0833C9.90608 8.54833 9.73608 8.61874 9.61075 8.74408C9.48541 8.86942 9.415 9.03941 9.415 9.21666ZM8.55 9.885C8.91911 9.885 9.21833 9.58577 9.21833 9.21666C9.21833 8.84755 8.91911 8.54833 8.55 8.54833C8.18089 8.54833 7.88166 8.84755 7.88166 9.21666C7.88166 9.58577 8.18089 9.885 8.55 9.885ZM8.55 12.9517C8.91911 12.9517 9.21833 12.6524 9.21833 12.2833C9.21833 11.9142 8.91911 11.615 8.55 11.615C8.18089 11.615 7.88166 11.9142 7.88166 12.2833C7.88166 12.6524 8.18089 12.9517 8.55 12.9517ZM9.10935 15.7159C9.17826 15.6108 9.21833 15.4851 9.21833 15.35C9.21833 14.9809 8.91911 14.6817 8.55 14.6817C8.18089 14.6817 7.88166 14.9809 7.88166 15.35C7.88166 15.7191 8.18089 16.0183 8.55 16.0183C8.67007 16.0183 8.78275 15.9867 8.88014 15.9312C8.97257 15.8786 9.05122 15.8046 9.10935 15.7159ZM10.0833 14.9667L12 14.9667L12 14.2V14.9667H10.0833ZM11.5392 13.4333L12 13.4333L12 13.0005V13.4333H11.5392ZM10.0833 11.9L12 11.9L12 11.1333V11.9H10.0833ZM10.85 10.3667L12 10.3667L12 9.6V10.3667H10.85ZM8.21499 9.03019C8.18421 9.08539 8.16666 9.14898 8.16666 9.21666C8.16666 9.24313 8.16934 9.26896 8.17445 9.29392C8.16934 9.26896 8.16667 9.24313 8.16667 9.21667C8.16667 9.14898 8.18421 9.08539 8.21499 9.03019ZM8.16712 12.3023C8.16682 12.296 8.16667 12.2897 8.16667 12.2833C8.16667 12.2039 8.1908 12.1302 8.23213 12.069C8.1908 12.1302 8.16666 12.2039 8.16666 12.2833C8.16666 12.2897 8.16682 12.296 8.16712 12.3023Z"],edit:["M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"],fire:["M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z"],folder:["M4 5v14h16V7h-8.414l-2-2H4zm8.414 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2z"],grid:["M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"],home:["M13 19h6V9.978l-7-5.444-7 5.444V19h6v-6h2v6zm8 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z"],image:["M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"],kitchen:["M22.7653 11.9059H0.234694H0.234224C0.125139 11.9061 0.0334204 11.9809 0.00741633 12.0819L0.00699389 12.0835L0.00661836 12.085L0.00628979 12.0864L0.00596122 12.0879L0.00558573 12.0894L0.00530408 12.0908L0.00497551 12.0923L0.00464694 12.0938L0.00436533 12.0953L0.00408367 12.0968L0.00366123 12.0991L0.00342653 12.1005L0.00319183 12.1019L0.00291022 12.1034L0.00272243 12.1048L0.00248778 12.1063L0.00229999 12.1077L0.00206529 12.1092L0.00187755 12.1107L0.00168981 12.1121L0.00154898 12.1137L0.00136124 12.1151L0.00122041 12.1166L0.00107958 12.1181L0.000938797 12.1196L0.000797969 12.121L0.000704098 12.1225L0.000563269 12.124L0.000469399 12.1255L0.000375528 12.127L0.00032857 12.1285L0.000234699 12.13L0.000187741 12.1315L0.000140829 12.133L9.38707e-05 12.1345L4.69578e-05 12.136L0 12.1375V12.139V12.1405C0 14.6518 2.03879 16.6906 4.55001 16.6906H9.54674C11.9794 16.6906 13.9687 14.7774 14.0908 12.3752H16.3529V13.1399C16.3529 13.5703 16.7023 13.9197 17.1327 13.9197H22.2202C22.6506 13.9197 23 13.5703 23 13.1399V12.1405C23 12.0262 22.918 11.9309 22.8097 11.9101L22.8083 11.9098L22.8068 11.9095L22.8054 11.9093L22.8039 11.909L22.8025 11.9088L22.801 11.9086L22.7996 11.9083L22.7981 11.9082L22.7967 11.908L22.7952 11.9078L22.7937 11.9076L22.7922 11.9074L22.7907 11.9072L22.7893 11.9071L22.7878 11.9069L22.7863 11.9068L22.7848 11.9067L22.7833 11.9066L22.7819 11.9065L22.7804 11.9063L22.7789 11.9063L22.7774 11.9062L22.7759 11.9061L22.7744 11.906L22.7729 11.906L22.7714 11.9059L22.7699 11.9059H22.7684L22.7668 11.9059H22.7653ZM13.6207 12.3752H0.476053C0.597906 14.5185 2.3767 16.2212 4.55001 16.2212H9.54674C11.7201 16.2212 13.4989 14.5185 13.6207 12.3752ZM22.5306 12.3752H16.8222V13.1399C16.8222 13.3112 16.9613 13.4503 17.1327 13.4503H22.2202C22.3915 13.4503 22.5306 13.3112 22.5306 13.1399V12.3752ZM5.29591 10.6774C5.17017 10.588 5.08962 10.4998 5.04855 10.4056C5.00494 10.3058 5.01001 10.2025 5.03465 10.096C5.06756 9.95386 5.13444 9.80764 5.20589 9.65556C5.46184 9.11098 5.74901 8.51016 5.36299 7.84386C5.29807 7.73177 5.15435 7.69347 5.04226 7.75844C4.93017 7.82335 4.89191 7.96708 4.95683 8.07912C5.15918 8.42844 5.08446 8.75204 4.96335 9.05381C4.86511 9.29859 4.73603 9.53174 4.65093 9.75455C4.54405 10.0345 4.50532 10.3025 4.60404 10.5586C4.6697 10.7291 4.79714 10.8987 5.0239 11.0599C5.12947 11.135 5.27611 11.1102 5.35116 11.0047C5.42626 10.8991 5.40148 10.7525 5.29591 10.6774ZM9.29327 10.6774C9.16752 10.588 9.08697 10.4998 9.0459 10.4056C9.00229 10.3058 9.00741 10.2025 9.03205 10.096C9.06491 9.95386 9.1318 9.80764 9.20324 9.65556C9.4592 9.11098 9.74637 8.51016 9.36034 7.84386C9.29543 7.73177 9.1517 7.69347 9.03961 7.75844C8.92757 7.82335 8.88927 7.96708 8.95418 8.07912C9.15658 8.42844 9.08181 8.75204 8.96075 9.05381C8.86251 9.29859 8.73338 9.53174 8.64833 9.75455C8.5414 10.0345 8.50268 10.3025 8.60139 10.5586C8.66706 10.7291 8.7945 10.8987 9.02126 11.0599C9.12682 11.135 9.27346 11.1102 9.34856 11.0047C9.42362 10.8991 9.39883 10.7525 9.29327 10.6774ZM7.29461 9.95062C7.16887 9.8612 7.08832 9.77305 7.0472 9.67889C7.00364 9.579 7.00871 9.47574 7.03335 9.36923C7.06626 9.22706 7.1331 9.08084 7.20459 8.92881C7.4605 8.38418 7.74767 7.78336 7.36169 7.11707C7.29673 7.00498 7.15305 6.96667 7.04096 7.03164C6.92887 7.09655 6.89057 7.24028 6.95553 7.35237C7.15788 7.70164 7.08316 8.02524 6.96205 8.32701C6.86381 8.57179 6.73473 8.80494 6.64963 9.02775C6.5427 9.3077 6.50402 9.57567 6.60269 9.83182C6.6684 10.0023 6.7958 10.1719 7.0226 10.3331C7.12812 10.4082 7.27481 10.3834 7.34986 10.2779C7.42492 10.1723 7.40018 10.0257 7.29461 9.95062Z"],knife:["M4.342 1.408L22.373 19.44a1.5 1.5 0 0 1-2.121 2.122l-4.596-4.597L12.12 20.5l-7.778-7.778a8 8 0 0 1-.174-11.135l.174-.179zm.241 3.07l-.051.11a6.005 6.005 0 0 0 1.047 6.535l.177.185 6.363 6.363 2.829-2.828L4.583 4.478z"],list:["M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"],measuring:["M1.92482 2.26004C1.81755 2.26118 1.71483 2.30345 1.63791 2.37821C1.56099 2.45297 1.51575 2.5545 1.51155 2.66169C1.50736 2.76887 1.54453 2.8735 1.61537 2.95404C1.68622 3.03459 1.78532 3.08484 1.89216 3.09436L20.1181 4.73523C20.1728 4.74021 20.228 4.73443 20.2804 4.71809C20.3328 4.70174 20.3815 4.6752 20.4237 4.64002C20.4659 4.60485 20.5008 4.56173 20.5263 4.51308C20.5518 4.46443 20.5674 4.41115 20.5724 4.35644C20.5773 4.30174 20.5714 4.24662 20.555 4.19419C20.5386 4.14177 20.5121 4.09308 20.4769 4.05092C20.4416 4.00876 20.3985 3.97403 20.3498 3.94857C20.3011 3.92311 20.2479 3.90744 20.1932 3.90255L1.96726 2.26167C1.95312 2.26095 1.93895 2.26095 1.92481 2.26167L1.92482 2.26004Z","M1.9183 2.26004C1.81452 2.26129 1.71491 2.30105 1.63887 2.37168C1.56282 2.4423 1.51576 2.53869 1.50685 2.64209L1.34848 4.49849C1.27556 5.356 1.94165 6.10717 2.80649 6.18508L5.43026 6.42019C6.29509 6.49793 7.08309 5.8752 7.15603 5.01769L7.31441 3.1613C7.32392 3.05087 7.28919 2.94121 7.21785 2.85639C7.14651 2.77156 7.04441 2.71859 6.93398 2.70904L1.96075 2.26167C1.94661 2.26095 1.93244 2.26095 1.9183 2.26167L1.9183 2.26004ZM2.30362 3.13191L6.4458 3.50417L6.32335 4.94585C6.2903 5.3344 5.93838 5.62646 5.50536 5.5875L2.8816 5.35239C2.44858 5.3131 2.14813 4.95887 2.18116 4.57033L2.30362 3.13191V3.13191Z","M20.1606 3.92867C20.1087 3.92836 20.0572 3.93768 20.0087 3.95622L0.790079 11.0292C0.736404 11.0465 0.686775 11.0743 0.644177 11.1113C0.601579 11.1482 0.566892 11.1934 0.542205 11.2441C0.517517 11.2948 0.503338 11.35 0.500522 11.4063C0.497705 11.4626 0.506309 11.5189 0.525815 11.5718C0.545322 11.6247 0.575328 11.673 0.614027 11.714C0.652727 11.755 0.699322 11.7879 0.751007 11.8104C0.802692 11.8329 0.858399 11.8447 0.914778 11.8452C0.971157 11.8456 1.02704 11.8347 1.07907 11.8129L20.2977 4.73992C20.39 4.7068 20.4678 4.64224 20.5173 4.55757C20.5669 4.4729 20.5851 4.37357 20.5687 4.27685C20.5524 4.18012 20.5025 4.09215 20.4279 4.02847C20.3533 3.96479 20.2587 3.92941 20.1606 3.92847V3.92867Z","M7.86132 8.45779C7.809 8.45674 7.75693 8.46554 7.70785 8.48371L0.785155 11.0306C0.681366 11.0686 0.596822 11.146 0.550011 11.2462C0.503199 11.3463 0.497928 11.4609 0.535351 11.5648L1.49375 14.2262C1.89276 15.3346 3.13597 15.9008 4.24814 15.4915L7.90051 14.1478C9.0127 13.7385 9.60242 12.5035 9.20341 11.395L8.24501 8.73371C8.21637 8.65438 8.16439 8.58561 8.09591 8.53636C8.02743 8.48711 7.94565 8.4597 7.86132 8.45779V8.45779ZM7.60009 9.41292L8.41645 11.6775C8.66029 12.3549 8.30562 13.107 7.61152 13.3624L3.95915 14.7078C3.26506 14.9633 2.52456 14.6211 2.28072 13.9437L1.46273 11.6726L7.60009 9.41292V9.41292Z","M20.1426 3.92379C20.0344 3.92637 19.9314 3.97087 19.8552 4.04788L3.98693 19.7464C3.94657 19.7847 3.91426 19.8307 3.89189 19.8816C3.86952 19.9325 3.85754 19.9874 3.85665 20.043C3.85576 20.0987 3.86599 20.1539 3.88672 20.2055C3.90746 20.2571 3.93829 20.3041 3.97741 20.3437C4.01653 20.3832 4.06315 20.4145 4.11454 20.4358C4.16593 20.4571 4.22105 20.4679 4.27668 20.4676C4.33231 20.4674 4.38732 20.456 4.4385 20.4342C4.48968 20.4124 4.53598 20.3806 4.57471 20.3407L20.443 4.64218C20.5035 4.58372 20.5449 4.50844 20.5619 4.42605C20.5789 4.34367 20.5706 4.25804 20.5381 4.18043C20.5057 4.10283 20.4506 4.03682 20.38 3.99104C20.3094 3.94525 20.2267 3.92181 20.1426 3.92379V3.92379Z","M10.7365 13.2318C10.6293 13.234 10.527 13.2772 10.4508 13.3526L3.98365 19.7512C3.94436 19.7901 3.91318 19.8364 3.89189 19.8874C3.87061 19.9384 3.85965 19.9931 3.85965 20.0484C3.85965 20.1037 3.87061 20.1584 3.89189 20.2094C3.91318 20.2604 3.94436 20.3067 3.98365 20.3455L6.43271 22.7685C7.51384 23.8381 9.27336 23.8381 10.3545 22.7685L13.4877 19.668C14.5687 18.5984 14.5687 16.8452 13.4877 15.7756L11.0386 13.3526C10.9989 13.3133 10.9517 13.2824 10.8998 13.2616C10.8479 13.2409 10.7924 13.2308 10.7365 13.2318V13.2318ZM10.7447 14.2376L12.8999 16.3699C13.6599 17.1218 13.6599 18.3218 12.8999 19.0737L9.76674 22.1742C9.00676 22.926 7.7805 22.926 7.02052 22.1742L4.87187 20.0484L10.7447 14.2376V14.2376Z","M21.194 1.06654C22.3708 1.32209 23.2739 2.27586 23.4635 3.46499C23.6531 4.65421 23.0917 5.84077 22.0528 6.44959C21.014 7.05832 19.7044 6.96768 18.7597 6.22101C18.6727 6.15215 18.6166 6.05152 18.6037 5.9413C18.5909 5.83109 18.6223 5.72025 18.6912 5.63323C18.76 5.54621 18.8606 5.49017 18.9708 5.47731C19.081 5.46445 19.1918 5.49582 19.2789 5.56466C19.9554 6.09933 20.886 6.16559 21.63 5.72956C22.3739 5.29361 22.7731 4.44882 22.6374 3.59724C22.5016 2.74558 21.8604 2.06588 21.0177 1.88289C20.1751 1.69991 19.3098 2.05242 18.8331 2.77109C18.7719 2.86353 18.6764 2.92784 18.5677 2.94987C18.459 2.9719 18.346 2.94992 18.2535 2.88864C18.1611 2.82737 18.0968 2.73182 18.0747 2.62312C18.0527 2.51443 18.0747 2.40148 18.136 2.30903C18.8016 1.30556 20.0173 0.81099 21.194 1.06654V1.06654Z"],menu:["M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"],pantry:["M3.75247 1.00025C3.9279 1.0044 4.09758 1.08769 4.2017 1.22894L5.72906 3.30353C5.79997 3.40255 5.83653 3.52468 5.83523 3.64655V6.39905H6.43963C6.7419 6.39905 7.01952 6.67659 7.01952 6.97895V8.51445C7.01952 8.8168 6.7419 9.09432 6.43963 9.09435H6.36611V10.393C6.37565 10.3938 6.42272 10.5705 6.53765 10.7769C6.669 11.0128 6.86069 11.3133 7.06037 11.6345C7.45971 12.2768 7.92614 12.9793 7.92614 13.807V20.4391C7.92614 20.7174 7.83257 20.9692 7.67292 21.1661H8.77557C8.61344 20.9373 8.5142 20.6561 8.5142 20.3575C8.51133 17.4191 8.5142 14.4846 8.5142 11.5528C8.5142 10.6193 9.00411 9.70843 9.45349 8.85749C9.67801 8.43202 9.90077 8.02851 10.0661 7.68952C10.2257 7.36212 10.3205 7.07926 10.3356 6.97895V5.09224H10.1559C9.85375 5.09224 9.57602 4.81468 9.576 4.51234V2.47858C9.576 2.17623 9.85375 1.89871 10.1559 1.89868H14.6971C14.9963 1.90339 15.2688 2.17922 15.2688 2.47858V4.51234C15.2688 4.8117 14.9963 5.08754 14.6971 5.09224H14.5174V7.03611C14.5174 7.05686 14.5882 7.32559 14.7461 7.64868C14.9039 7.97179 15.1276 8.36002 15.3587 8.784C15.8208 9.63192 16.3306 10.5748 16.3306 11.5528V20.3575C16.3306 20.6557 16.2392 20.9375 16.0774 21.1661H16.8942C16.7329 20.9692 16.6328 20.7174 16.6328 20.4391C16.6299 18.2251 16.6328 16.0147 16.6328 13.807C16.6328 13.0098 17.0891 12.3372 17.4822 11.6917C17.6788 11.3689 17.8724 11.0512 18.0132 10.8014C18.1424 10.5718 18.2051 10.3837 18.2173 10.344V9.09435H18.1275C17.8253 9.09435 17.5476 8.8168 17.5476 8.51445V6.97895C17.5476 6.67659 17.8253 6.39908 18.1275 6.39905H22.097C22.3991 6.39905 22.6768 6.67659 22.6768 6.97895V8.51445C22.6768 8.8168 22.3991 9.09432 22.097 9.09435H22.0153V10.393C22.0248 10.3922 22.0704 10.5705 22.1868 10.7769C22.3198 11.0127 22.5154 11.3133 22.7177 11.6345C23.1221 12.2768 23.5916 12.9758 23.5916 13.807V20.4391C23.5916 20.718 23.4921 20.9691 23.3303 21.1661H23.4201C23.7223 21.1661 24 21.4355 24 21.7378V23.4203C24 23.7227 23.7223 24.0002 23.4201 24.0002H1.57992C1.27765 24.0002 1.00003 23.7227 1 23.4203V21.7378C1 21.5104 1.14867 21.2922 1.35938 21.2069C1.17619 21.0033 1.06535 20.74 1.06535 20.4391V13.807C1.06535 13.0135 1.5024 12.3373 1.89026 11.6917C2.0843 11.3689 2.27401 11.0677 2.41298 10.8177C2.54085 10.5878 2.61306 10.3856 2.62537 10.344V9.09435H2.54366C2.24153 9.09435 1.9638 8.8168 1.96378 8.51445V6.97895C1.96378 6.67659 2.24153 6.39908 2.54366 6.39905H3.15626V1.572C3.15616 1.26352 3.44441 0.990634 3.75247 1.00025V1.00025ZM4.30787 3.34437V6.39905H4.67543V3.84258L4.30787 3.34437ZM13.3658 5.09224H11.4872V7.03611V7.08512C11.4458 7.47057 11.289 7.81523 11.1033 8.19593C10.9178 8.57662 10.6839 8.98437 10.4663 9.39655C10.031 10.2209 9.66583 11.0949 9.66583 11.5528V13.0556C11.3924 12.8946 13.1712 12.0814 15.179 11.953V11.5528C15.179 11.0474 14.7858 10.1698 14.3377 9.34756C14.1137 8.93643 13.8922 8.53057 13.7088 8.15509C13.5253 7.77962 13.3658 7.4553 13.3658 7.03611V5.09224V5.09224ZM20.8636 9.09435H19.369V10.4093C19.3718 10.4334 19.3718 10.4588 19.369 10.4828C19.3244 10.83 19.1747 11.08 19.0096 11.3731C18.8446 11.6662 18.6505 11.9789 18.4624 12.2879C18.086 12.9058 17.7845 13.5608 17.7845 13.807V14.9832C18.4597 14.945 19.1711 14.7448 19.9325 14.5258C20.7128 14.3014 21.5531 14.0518 22.44 14.0521V13.807C22.44 13.5232 22.1255 12.8631 21.7376 12.247C21.5436 11.939 21.3382 11.6397 21.174 11.3486C21.0098 11.0575 20.8636 10.8051 20.8636 10.4093V9.09435V9.09435ZM5.21449 9.09435H3.77699V10.4093C3.77987 10.4334 3.77987 10.4588 3.77699 10.4828C3.73271 10.8273 3.58873 11.0802 3.42577 11.3731C3.26286 11.666 3.06423 11.979 2.87855 12.2879C2.5072 12.9058 2.21697 13.557 2.21697 13.807V14.8443H6.77451V13.807C6.77451 13.5197 6.46328 12.8631 6.08026 12.247C5.88875 11.939 5.68687 11.6396 5.52486 11.3486C5.36282 11.0576 5.21449 10.8021 5.21449 10.4093V9.09435V9.09435ZM22.8484 22.3177H2.15162V22.8404H22.8484V22.3177Z"],pot:["M22.2333 8.48041H19.1667H3.83333H0.766667C0.3427 8.48041 0 8.82387 0 9.24707C0 9.67027 0.3427 10.0137 0.766667 10.0137H3.06667V18.4471C3.06667 19.7151 4.0986 20.7471 5.36667 20.7471H17.6333C18.9014 20.7471 19.9333 19.7151 19.9333 18.4471V10.0137H22.2333C22.6573 10.0137 23 9.67027 23 9.24707C23 8.82387 22.6573 8.48041 22.2333 8.48041ZM17.6333 19.2137H5.36667C4.94347 19.2137 4.6 18.8695 4.6 18.4471V10.0137H18.4V18.4471C18.4 18.8695 18.0565 19.2137 17.6333 19.2137Z","M3.83333 7.72217H19.1667C19.5906 7.72217 19.9333 7.3787 19.9333 6.9555C19.9333 6.5323 19.5906 6.18883 19.1667 6.18883H12.2046V4.76667C12.2046 4.34347 11.8619 4 11.4379 4C11.0139 4 10.6712 4.34347 10.6712 4.76667V6.18883H3.83333C3.40937 6.18883 3.06667 6.5323 3.06667 6.9555C3.06667 7.3787 3.40937 7.72217 3.83333 7.72217Z"],restaurant:["M14.268 12.146l-.854.854 7.071 7.071-1.414 1.414L12 14.415l-7.071 7.07-1.414-1.414 9.339-9.339c-.588-1.457.02-3.555 1.62-5.157 1.953-1.952 4.644-2.427 6.011-1.06s.892 4.058-1.06 6.01c-1.602 1.602-3.7 2.21-5.157 1.621zM4.222 3.808l6.717 6.717-2.828 2.829-3.89-3.89a4 4 0 0 1 0-5.656zM18.01 9.11c1.258-1.257 1.517-2.726 1.061-3.182-.456-.456-1.925-.197-3.182 1.06-1.257 1.258-1.516 2.727-1.06 3.183.455.455 1.924.196 3.181-1.061z"],restaurant2:["M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z"],save:["M5 5v14h14V7.828L16.172 5H5zM4 3h13l3.707 3.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM6 6h9v4H6V6z"],save2:["M4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 1v5h9V4H7zm-1 8v7h12v-7H6zm7-7h2v3h-2V5z"],settings:["M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"],subtract:["M5 11h14v2H5z"],tag:["M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"]};function v(e,C,V){const a=e.slice();return a[2]=C[V],a}function i(e){let C,V;return{c(){C=c("path"),this.h()},l(a){C=s(a,"path",{d:!0}),n(C).forEach(r),this.h()},h(){h(C,"d",V=e[2])},m(a,L){z(a,C,L)},p(a,L){L&1&&V!==(V=a[2])&&h(C,"d",V)},d(a){a&&r(C)}}}function k(e){let C,V=e[0],a=[];for(let L=0;L<V.length;L+=1)a[L]=i(v(e,V,L));return{c(){C=c("svg");for(let L=0;L<a.length;L+=1)a[L].c();this.h()},l(L){C=s(L,"svg",{class:!0,viewBox:!0,"fill-rule":!0,"clip-rule":!0});var t=n(C);for(let H=0;H<a.length;H+=1)a[H].l(t);t.forEach(r),this.h()},h(){h(C,"class","c svelte-15halfw"),h(C,"viewBox","0 0 24 24"),h(C,"fill-rule","evenodd"),h(C,"clip-rule","evenodd")},m(L,t){z(L,C,t);for(let H=0;H<a.length;H+=1)a[H].m(C,null)},p(L,[t]){if(t&1){V=L[0];let H;for(H=0;H<V.length;H+=1){const M=v(L,V,H);a[H]?a[H].p(M,t):(a[H]=i(M),a[H].c(),a[H].m(C,null))}for(;H<a.length;H+=1)a[H].d(1);a.length=V.length}},i:o,o,d(L){L&&r(C),f(a,L)}}}function A(e,C,V){let a,{name:L}=C;return e.$$set=t=>{"name"in t&&V(1,L=t.name)},e.$$.update=()=>{e.$$.dirty&2&&V(0,a=_[L]||[])},[a,L]}class b extends Z{constructor(C){super();d(this,C,A,k,g,{name:1})}}export{b as I,x as m};
