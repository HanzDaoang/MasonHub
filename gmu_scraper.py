import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    # Send an HTTP GET request to the website
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the HTML content with BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find the header "Events Around Campus"
        header = soup.find('h2', text='Events Around Campus')

        if header:
            # Find the parent div with the specified class
            target_div = header.find_next('div', class_='field--name-body')

            if target_div:
                # Extract the text inside the div
                target_text = target_div.text.strip()
                print("Scraped Text:", target_text)
            else:
                print("Target div not found after the header.")
        else:
            print("Header 'Events Around Campus' not found on the page.")
    else:
        print("Failed to retrieve the webpage. Status Code:", response.status_code)

if __name__ == "__main__":
    # Replace 'your_website_url' with the URL of the website you want to scrape
    scrape_website('https://www.gmu.edu/')
