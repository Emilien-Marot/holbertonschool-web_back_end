#!/usr/bin/env python3
"""
back at school
"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    voila
    :param page:
    :param page_size:
    :return:
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
