#!/usr/bin/env python3
"""
something something finally
"""
from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    col = db.nginx
    total_methods = {"GET": 0, "POST": 0, "PUT": 0, "PATCH": 0, "DELETE": 0}
    total_col = col.aggregate([{"$match": {}}, {"$count": "total"}])
    total = 0
    for val in total_col:
        total = val['total']
    print(f"{total} logs")
    methods = col.aggregate([
        {"$group": {"_id": "$method", "count": {"$sum": 1}}}])
    for method in methods:
        if method["_id"] in total_methods:
            total_methods[method["_id"]] = method["count"]
    print("Methods:")
    for method in total_methods:
        print(f"\tmethod {method}: {total_methods[method]}")
    col_status = col.aggregate(
        [
            {"$match": {"method": "GET", "path": "/status"}},
            {"$count": "total"}])
    count_status = 0
    for status in col_status:
        count_status = status['total']
    print(f"{count_status} status check")
