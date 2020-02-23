import re


def read():
    """
    Endpoint /api/sold-properties

    :return:    list of x, y coordinates and price for each sold property
    """
    sold_properties = []

    with open("./sold-price-data.txt", "r") as f:

        for property in f:
            matched_data = re.search(r"(\d+) (\d+) (\d+)", property)

            if matched_data:
                sold_properties.append(
                    {
                        "x": int(matched_data[1]),
                        "y": int(matched_data[2]),
                        "price": int(matched_data[3]),
                    }
                )

    return sold_properties
