// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        executionResponse: {
            dimensions: [
                {
                    headers: [
                        {
                            measureGroupHeader: {
                                items: [
                                    {
                                        measureHeaderItem: {
                                            name: "<button>Lost</button> ...",
                                            format: "#,##0.00",
                                            localIdentifier: "lostMetric",
                                            uri: "/gdc/md/" + projectId + "/obj/1283",
                                            identifier: "af2Ewj9Re2vK",
                                        },
                                    },
                                    {
                                        measureHeaderItem: {
                                            name: "Won",
                                            format: "#,##0.00",
                                            localIdentifier: "wonMetric",
                                            uri: "/gdc/md/" + projectId + "/obj/1284",
                                            identifier: "afSEwRwdbMeQ",
                                        },
                                    },
                                    {
                                        measureHeaderItem: {
                                            name: "Expected",
                                            format: "#,##0.00",
                                            localIdentifier: "expectedMetric",
                                            uri: "/gdc/md/" + projectId + "/obj/1285",
                                            identifier: "alUEwmBtbwSh",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    headers: [
                        {
                            attributeHeader: {
                                name: "Year (Created)",
                                localIdentifier: "yearCreatedAttribute",
                                uri: "/gdc/md/" + projectId + "/obj/158",
                                identifier: "created.aag81lMifn6q",
                                formOf: {
                                    uri: "/gdc/md/" + projectId + "/obj/157",
                                    identifier: "created",
                                    name: "Year created",
                                },
                            },
                        },
                    ],
                },
            ],
            links: {
                executionResult:
                    "/gdc/app/projects/d20eyb3wfs0xe5l0lfscdnrnyhq1t42q/executionResults/5065774892428557312?q=eAGlklFL5DAUhf9KyLy4MNg6zuDsgIisugjLsriKiMzDbXOnjaZJTW6pZeh%2F93Y66ii%2BOAN5SJqT%0Ak6%2FnZCk9ls7TXyhQzuSNJU0GlRzK1JmqsLdaUR7k7H4%2BlAttCP164V3dzWSB5HX627uqlKwJ7CVn%0Ay%2FXpj9p5yx7OF8AKmXn9fkunW0qlQ2mguWDJpWJJlKk0KlSkRjE2yWG9CPEzTkxsFiFV1tsmfzqg%0A8egpcslDdDCZMnQCAc8NFmjp5ury%2Bx5HEfanw4lWx2wIxL%2BXVITbEB2xgfLamDNX2%2F%2BE5emr29nF%0Ad9l%2BjtmsT1eWj928KgrwDfvcIfhN1OuuwvV3sffLIxCqH6xYdfvlhiMwXQlc82rMW%2B6yr7bv5q23%0AwXAwiPfj%2BAPBdY6CeYRbCDBGuLJ7UpXVpDEIyoEEeBSpcQGV4DSFdSRqZzeY%2FrhAvOzv3CLs0fRQ%0AtsPl%2BwPbATRxlL%2FSglWfSG9X3DuAjrcBRfsp1hp1lnOxAjLQNpAIBBmKf94lkGijqdlI9%2Fy5xJTF%0AuyU8ke28fQEDx2gq%0A&c=47a422fb552e888d8142930477df4090&dimension=Opportunities&dimension=Year%20(Created)",
            },
        },
    };
};
