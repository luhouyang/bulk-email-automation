import base64

# # Read the font file in binary mode
# with open("GoogleSansDisplay-Regular.ttf", "rb") as font_file:
#     encoded_string = base64.b64encode(font_file.read()).decode('utf-8')

# # Save the encoded string to a file
# with open("GoogleSansDisplay-Regular.base64", "w") as output_file:
#     output_file.write(encoded_string)

# print("Base64 string saved to GoogleSansDisplay-Regular.base64")


# Read the font file in binary mode
with open("GoogleSansDisplay-Bold.ttf", "rb") as font_file:
    encoded_string = base64.b64encode(font_file.read()).decode('utf-8')

# Save the encoded string to a file
with open("GoogleSansDisplay-Bold.base64", "w") as output_file:
    output_file.write(encoded_string)

print("Base64 string saved to GoogleSansDisplay-Bold.base64")