// (C) 2020 GoodData Corporation
module.exports = projectId => {
    return {
        execution: {
            afm: {
                measures: [
                    {
                        localIdentifier: "franchiseFeesIdentifier",
                        definition: {
                            measure: {
                                item: {
                                    identifier: "aaEGaXAEgB7U",
                                },
                            },
                        },
                    },
                    {
                        localIdentifier: "franchiseFeesAdRoyaltyIdentifier",
                        definition: {
                            measure: {
                                item: {
                                    identifier: "aabHeqImaK0d",
                                },
                            },
                        },
                    },
                    {
                        localIdentifier: "franchiseFeesInitialFranchiseFeeIdentifier",
                        definition: {
                            measure: {
                                item: {
                                    identifier: "aaDHcv6wevkl",
                                },
                            },
                        },
                    },
                    {
                        localIdentifier: "franchiseFeesIdentifierOngoingRoyalty",
                        definition: {
                            measure: {
                                item: {
                                    identifier: "aaWGcgnsfxIg",
                                },
                            },
                        },
                    },
                ],
                attributes: [
                    {
                        displayForm: {
                            identifier: "label.restaurantlocation.locationstate",
                        },
                        localIdentifier: "state",
                    },
                    {
                        displayForm: {
                            identifier: "label.restaurantlocation.locationname",
                        },
                        localIdentifier: "location",
                    },
                    {
                        displayForm: {
                            identifier: "date.aam81lMifn6q",
                        },
                        localIdentifier: "year",
                    },
                    {
                        displayForm: {
                            identifier: "date.abm81lMifn6q",
                        },
                        localIdentifier: "month",
                    },
                ],
            },
            resultSpec: {
                dimensions: [
                    {
                        itemIdentifiers: ["state", "location"],
                    },
                    {
                        itemIdentifiers: ["year", "month", "measureGroup"],
                    },
                ],
            },
        },
    };
};
