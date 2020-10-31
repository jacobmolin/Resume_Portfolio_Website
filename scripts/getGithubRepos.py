import json
import requests

url = 'https://api.github.com/users/jacobmolin/repos?per_page=50'


def jprint(obj):
    # Create a formatted string of the Python JSON object
    print(json.dumps(obj, sort_keys=True, indent=4))


# token = "4D54C4AB4E2378DBFC5DBF0D8B670C2D14C8B31F"
# url = f"https://api.adtraction.com/v2/affiliate/products/feed/?token={token}"
# data = {'programId': '1136856383',
#         'channelId': '1535345309',
#         'setEPI': '1535345309'}
# headers = {'content-type': 'application/json;charset=UTF-8'}


r = requests.get(url)
print("Len:", len(r.json()))
jprint(r.json())

# # items = r.json()
# # print(items[0])

# not_ean_counter = 0

# for item in r.json():
#     # print(item["approvalStatus"])
#     try:
#         if (item["ean"] and '7320562575444' in item['ean']):
#             print('EAN:', item['ean'])
#             print('Manufacturer:', item['manufacturer'])
#             print('productName:', item['productName'])
#             print('Cat:', item['productCategory'])
#             # jprint(item)
#             print('\n')

#             if(item["ean"] == "5713115336357"):
#                 print('productName:', item['productName'])
#                 print('EAN:', item['ean'])
#     except KeyError as ke:
#         not_ean_counter += 1

# print(f"No EAN: {not_ean_counter}")
