#!/usr/bin/env python3
"""
something something Meenakshee
"""


def update_topics(mongo_collection, name, topics):
    """
    something something guilty
    :param mongo_collection:
    :return:
    """
    query = {"name": name}
    val = {"$set": {"topics": topics}}
    i = mongo_collection.update_many(query, val)
