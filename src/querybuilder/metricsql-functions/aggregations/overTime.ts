import { createAggregationOverTime } from "../../aggregations";
import { PromOperationId } from "../../types";

const overTimeFunctions = [
  PromOperationId.AscentOverTime,
  PromOperationId.ChangesPrometheus,
  PromOperationId.DecreasesOverTime,
  PromOperationId.DefaultRollup,
  PromOperationId.DeltaPrometheus,
  PromOperationId.DerivFast,
  PromOperationId.DescentOverTime,
  PromOperationId.DistinctOverTime,
  PromOperationId.FirstOverTime,
  PromOperationId.GeomeanOverTime,
  PromOperationId.HistogramOverTime,
  PromOperationId.Ideriv,
  PromOperationId.IncreasePrometheus,
  PromOperationId.IncreasePure,
  PromOperationId.IncreasesOverTime,
  PromOperationId.Integrate,
  PromOperationId.Lag,
  PromOperationId.Lifetime,
  PromOperationId.MadOverTime,
  PromOperationId.MedianOverTime,
  PromOperationId.ModeOverTime,
  PromOperationId.RangeOverTime,
  PromOperationId.RateOverSum,
  PromOperationId.Rollup,
  PromOperationId.RollupCandlestick,
  PromOperationId.RollupDelta,
  PromOperationId.RollupDeriv,
  PromOperationId.RollupIncrease,
  PromOperationId.RollupRate,
  PromOperationId.RollupScrapeInterval,
  PromOperationId.ScrapeInterval,
  PromOperationId.StaleSamplesOverTime,
  PromOperationId.StdvarOverTime,
  PromOperationId.Sum2OverTime,
  PromOperationId.TimestampWithName,
  PromOperationId.TfirstOverTime,
  PromOperationId.TlastChangeOverTime,
  PromOperationId.TlastOverTime,
  PromOperationId.TmaxOverTime,
  PromOperationId.TminOverTime,
  PromOperationId.ZscoreOverTime,
  PromOperationId.HistogramAvg,
  PromOperationId.HistogramStddev,
  PromOperationId.HistogramStdvar,
  PromOperationId.PrometheusBuckets,
]

export function getOverTimeFunctions() {
  return overTimeFunctions.map(id => createAggregationOverTime(id))
}