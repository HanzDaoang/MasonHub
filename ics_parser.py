from bs4 import BeautifulSoup

def parse_ics(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Process the parsed data as needed
    # For example, print all event summaries
    events = soup.find_all('summary')
    for event in events:
        print(event.get_text())

    print(soup.prettify())

if __name__ == '__main__':
    ics_file_path = 'src/ical_gmu.ics'
    parse_ics(ics_file_path)
