import requests
from bs4 import BeautifulSoup
from datetime import datetime

def scrape_calendar(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        # Replace these with the actual HTML elements that contain the event information
        event_elements = soup.find_all('div', class_='twMonthEventContainer')

        today = datetime.today().date()

        # Extract events for today
        today_events = []
        for event_element in event_elements:
            event_time = event_element.find('strong').text
            event_title = event_element.find('a').text.strip()

            # Extract the event date from the URL
            event_url = event_element.find('a')['href']
            event_date_str = event_url.split('eventid=')[-1]
            event_date = datetime.strptime(event_date_str, '%Y%m%d').date()

            if event_date == today:
                today_events.append({'title': event_title, 'time': event_time})

                # Print event details for debugging
                print(f"Event Title: {event_title}")
                print(f"Event Time: {event_time}")
                print("------")

        return today_events

    else:
        print(f"Failed to fetch the page. Status code: {response.status_code}")
        return []

if __name__ == '__main__':
    calendar_url = 'https://www.gmu.edu/calendar'
    today_events = scrape_calendar(calendar_url)

    for event in today_events:
        print(f"{event['time']} - {event['title']}")
