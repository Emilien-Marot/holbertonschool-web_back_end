#!/usr/bin/env python3
"""
something something Meenakshee
"""


def schools_by_topic(mongo_collection, topic):
    """
    something something guilty
    :param mongo_collection:
    :return:
    """
    return mongo_collection.find({"topics": topic})
