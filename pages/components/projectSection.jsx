export default function ProjectSection({t}) {

    const icons = [
        {
            icon: (
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                    <path
                        d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                </svg>
            ),
        },
        {
            icon: (
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                    <path
                        d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            )
        },
        {
            icon: (
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                </svg>
            )
        }
    ]

    const sections = [
            {
                title: t("work.section_1.title"),
                description: t("work.section_1.description"),
                icons: [
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#80deea"
                            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                        ></path>
                        <path
                            fill="#80deea"
                            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                        ></path>
                        <path
                            fill="#80deea"
                            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                        ></path>
                        <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                    </svg>,
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                    >
                        <rect
                            width="36"
                            height="36"
                            x="6"
                            y="6"
                            fill="#1976d2"
                        ></rect>
                        <polygon
                            fill="#fff"
                            points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                        ></polygon>
                        <path
                            fill="#fff"
                            d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                        ></path>
                    </svg>,
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#00acc1"
                            d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                        ></path>
                    </svg>,
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                    >
                        <polygon
                            fill="#29b6f6"
                            points="1,5 7,9 7,29 1,25"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="47,20 41,24 41,37 47,33"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="47,6 41,10 41,17 47,13"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="35,5 29,9 29,29 35,25"
                        ></polygon>
                        <polygon
                            fill="#29b6f6"
                            points="1,12 18,23 18,16 1,5"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="35,12 18,23 18,16 35,5"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="35,26 18,37 18,30 35,19"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="47,34 30,45 30,38 47,27"
                        ></polygon>
                        <polygon
                            fill="#29b6f6"
                            points="30,37.765 18,30 18,37 30,44.765"
                        ></polygon>
                    </svg>,
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#7e57c2"
                            d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
                        ></path>
                        <path
                            fill="#7e57c2"
                            d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
                        ></path>
                        <path
                            fill="#7e57c2"
                            d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
                        ></path>
                    </svg>
                ],
                details: [
                    {
                        title: t("work.section_1.details.point_1.title"),
                        description: t("work.section_1.details.point_1.description"),
                    },
                    {
                        title: t("work.section_1.details.point_2.title"),
                        description: t("work.section_1.details.point_2.description"),
                    },
                    {
                        title: t("work.section_1.details.point_3.title"),
                        description: t("work.section_1.details.point_3.description"),
                    },
                ],
            },
            {
                title: t("work.section_2.title"),
                description: t("work.section_2.description"),
                icons: [
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                         viewBox="0 0 48 48">
                        <path fill="#80deea"
                              d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path>
                        <path fill="#80deea"
                              d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path>
                        <path fill="#80deea"
                              d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path>
                        <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                    </svg>,
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                         viewBox="0 0 48 48">
                        <path fill="#00acc1"
                              d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                    </svg>,
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                         viewBox="0 0 48 48">
                        <path fill="#03A9F4"
                              d="M40,20c0.391-1.735-0.092-3.78-2.5-6c-3.914,3.543-2.795,7.227-1.5,9c0,0-0.166,1-4,1S2,24,2,24S0.167,40,18,40c15.593,0,19.973-12.003,20.828-15.076C39.182,24.972,39.579,25.003,40,25c2.147-0.017,4.93-1.171,6-5.484C43.162,18.533,41.339,18.978,40,20z"></path>
                        <path fill="#0288D1"
                              d="M2.165,28C2.9,32.739,5.983,40,18,40c12.185,0,17.523-7.33,19.682-12H2.165z"></path>
                        <path fill="#81D4FA"
                              d="M19.812,39.938C18.892,39.616,14.74,38.848,14,33c-4.209,1.863-7.938,1.375-9.579,1.008C6.583,37.237,10.591,40,18,40C18.623,40,19.224,39.976,19.812,39.938z"></path>
                        <path fill="#FFF" d="M18 30A2 2 0 1 0 18 34A2 2 0 1 0 18 30Z"></path>
                        <path fill="#37474F"
                              d="M14.914,33.597c0.224,0.505,0.02,1.162-0.51,1.318c-3.301,0.973-6.146,1.102-8.297,1.102c-0.644-0.619-1.194-1.279-1.656-1.963c2.585,0,6.71-0.12,9.144-0.966C14.117,32.906,14.69,33.09,14.914,33.597z M2,27c0,0,1.875,0.125,3-1c1.875,1.688,5.94,1.088,7,0c1.063,1.688,6.938,1.375,8,0c1.25,1.438,6.625,1.75,8,0c0.479,1.461,6.819,1.874,8,0c1.061,1.088,5.063,1.938,7.311,0C43.875,27.188,46,27,46,27v1H2 M17,32c0,0.552,0.448,1,1,1s1-0.448,1-1s-0.448-1-1-1S17,31.448,17,32z"></path>
                        <path fill="#01579B"
                              d="M11,24H6v-5h5V24z M21,19h-5v5h5V19z M31,19h-5v5h5V19z M16,14h-5v5h5V14z M26,14h-5v5h5V14z"></path>
                        <path fill="#0288D1"
                              d="M16,24h-5v-5h5V24z M26,19h-5v5h5V19z M26,9h-5v5h5V9z M21,14h-5v5h5V14z"></path>
                    </svg>
                ],
                details: [
                    {
                        title: t("work.section_2.details.point_1.title"),
                        description: t("work.section_2.details.point_1.description"),
                    },
                    {
                        title: t("work.section_2.details.point_2.title"),
                        description: t("work.section_2.details.point_2.description"),
                    },
                    {
                        title: t("work.section_2.details.point_3.title"),
                        description: t("work.section_2.details.point_3.description"),
                    },
                ],
            }
            ,
        ]
    ;

    return (
        <section>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto space-y-10">
                <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
                        {t("work.title")}
                    </h2>
                </div>
                {sections.map((section, sectionIndex) => (
                    <div key={`section-${sectionIndex}`} className="w-full">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div
                                className="flex flex-col h-full justify-center lg:w-3/4 transition-opacity duration-300">
                                <h2 className="text-3xl text-gray-800 font-bold lg:text-3xl dark:text-white">
                                    {section.title}
                                </h2>
                                <div className="mt-3 text-gray-800 dark:text-gray-400">
                                    {section.description}
                                </div>
                                <div
                                    className="mt-5 inline-flex items-center gap-x-10 font-medium text-blue-600 dark:text-blue-500">
                                    {section.icons.map((icon, iconIndex) => (
                                        <div key={`icon-${sectionIndex}-${iconIndex}`}>{icon}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6 lg:space-y-10 transition-opacity duration-300">
                                {section.details.map((detail, detailIndex) => (
                                    <div key={`detail-${sectionIndex}-${detailIndex}`} className="flex">
                                        <div
                                            className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                                            {icons[detailIndex % icons.length].icon}
                                        </div>
                                        <div className="ml-5 sm:ml-8">
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                {detail.title}
                                            </h3>
                                            <div className="mt-1 text-gray-600 dark:text-gray-400">
                                                {detail.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {sectionIndex !== sections.length - 1 && (
                            <hr className="w-full mt-10 border-t border-gray-200 dark:border-gray-700"/>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
