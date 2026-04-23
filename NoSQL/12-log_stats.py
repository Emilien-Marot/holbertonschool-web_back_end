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
    total = col.aggregate([{"$match": {}}, {"$count": "total"}])
    for val in total:
        print(f"{val['total']} logs")
    methods = col.aggregate([
        {"$group": {"_id": "$method", "count": {"$sum": 1}}}])
    for method in methods:
        if method["_id"] in total_methods:
            total_methods[method["_id"]] = method["count"]
    print("Methods:")
    for method in total_methods:
        print(f"    method {method}: {total_methods[method]}")
    count_status = col.aggregate(
        [
            {"$match": {"method": "GET", "path": "/status"}},
            {"$count": "total"}])
    for status in count_status:
        print(f"{status['total']} status check")
