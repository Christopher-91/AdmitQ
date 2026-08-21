import pandas as pd
import json
import ssl
ssl._create_default_https_context = ssl._create_unverified_context

# Fetch QS rankings from Wikipedia
url = "https://en.wikipedia.org/wiki/QS_World_University_Rankings"
tables = pd.read_html(url)

# The top 50 table is usually one of the first few. Let's find the one with 'Institution' and '2024' or '2025'
target_table = None
for idx, table in enumerate(tables):
    columns = [str(c).lower() for c in table.columns]
    if 'institution' in columns and any('2024' in c for c in columns):
        target_table = table
        break
    if 'institution' in table.columns and '2025' in table.columns:
        target_table = table
        break
    if isinstance(table.columns, pd.MultiIndex):
        # Flatten multiindex
        flat_cols = [' '.join(col).strip().lower() for col in table.columns.values]
        if any('institution' in c for c in flat_cols) and any('2024' in c or '2025' in c for c in flat_cols):
            target_table = table
            # reset columns
            target_table.columns = flat_cols
            break

if target_table is None:
    print("Could not find the QS ranking table on Wikipedia. Check manually.")
    exit(1)

# Now we have the table. It has columns like '2024', 'Institution', etc.
year_col = next((c for c in target_table.columns if '2024' in c or '2025' in c), None)
inst_col = next((c for c in target_table.columns if 'institution' in c), None)

if not year_col or not inst_col:
    print("Could not find required columns in the table.")
    print("Columns:", target_table.columns)
    exit(1)

rankings = {}
for index, row in target_table.iterrows():
    inst = str(row[inst_col]).strip()
    rank = str(row[year_col]).strip()
    
    # Clean rank (remove equals signs, etc.)
    rank = rank.replace('=', '').strip()
    
    if rank.isdigit() and inst != 'nan':
        rankings[inst] = int(rank)

with open('qs_rankings.json', 'w') as f:
    json.dump(rankings, f, indent=2)

print(f"Successfully dumped {len(rankings)} rankings to qs_rankings.json")
